import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { pizzas } from '../data'
import { ChevronLeft, ChevronRight } from './Icons'
import Pizza from './Pizza'

const DURATION = 500

// Each size gets its own dot so the row reads as a scale at a glance, and
// its own price step off the pizza's base (medium) price.
// Angular spacing between names on the ring — wide enough that the two
// neighbours sit clear of the crust, tight enough to read as one arc.
const RING_STEP = 46

const SIZES = [
  { id: 's', label: 'Small', inches: '10\"', dot: 8, delta: -3 },
  { id: 'm', label: 'Medium', inches: '12\"', dot: 12, delta: 0 },
  { id: 'l', label: 'Large', inches: '14\"', dot: 16, delta: 4 },
]

export default function PizzaSlider() {
  // `current` is the pizza that owns the active position — the name tag reads
  // from it, so it only advances once the incoming slide has actually landed.
  const [current, setCurrent] = useState(0)
  const [incoming, setIncoming] = useState(null) // { index, dir }
  const [size, setSize] = useState('m')
  // The caption swaps in the very frame the slide starts moving, so the
  // name and price travel with the pie instead of trailing it.
  const [labelIndex, setLabelIndex] = useState(0)

  const busy = useRef(false)
  const currentRef = useRef(null)
  const incomingRef = useRef(null)

  const go = useCallback(
    (dir) => {
      if (busy.current) return // ignore clicks while a slide is in flight
      busy.current = true
      const index = (current + dir + pizzas.length) % pizzas.length
      setIncoming({ index, dir })
    },
    [current],
  )

  useLayoutEffect(() => {
    if (!incoming) return

    const el = incomingRef.current
    const out = currentRef.current
    // both directions play the same motion — only which pizza comes next
    // differs, so `dir` is no longer read here
    const enterClass = 'enter-below'
    const leaveClass = 'leave-down'

    // 1 + 2. Park the incoming slide off-screen *silently*: transitions are
    // disabled and the reflow commits the off-screen position immediately.
    el.classList.add('no-transition', enterClass)
    void el.offsetWidth

    let raf1 = 0
    let raf2 = 0
    let settled = false

    const finish = () => {
      if (settled) return
      settled = true
      el.removeEventListener('transitionend', onEnd)
      clearTimeout(timer)
      setCurrent(incoming.index)
      setIncoming(null)
      busy.current = false
    }

    const onEnd = (e) => {
      if (e.target === el && e.propertyName === 'transform') finish()
    }

    // safety net in case transitionend never fires (tab hidden, etc.)
    const timer = setTimeout(finish, DURATION + 150)

    // 3. Next tick: transitions back on, off-screen start already committed,
    // so the entrance animation plays its full horizontal travel.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        el.addEventListener('transitionend', onEnd)
        el.classList.remove('no-transition', enterClass)
        el.classList.add('active')
        setLabelIndex(incoming.index)

        // 4. The outgoing slide leaves from its already-transitioning state.
        if (out) {
          out.classList.remove('active')
          out.classList.add(leaveClass)
        }
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      clearTimeout(timer)
      el.removeEventListener('transitionend', onEnd)
    }
  }, [incoming])

  const pizza = pizzas[current]
  const labelled = pizzas[labelIndex]

  return (
    <div className="mt-auto flex w-full flex-col items-center">
      {/* Above the pie: the size picker only — the names live on the ring
          that curves around the pizza. The price rides with the selected
          size, since that is what it belongs to. */}
      <div className="mb-[clamp(4rem,9vh,6rem)] flex items-start gap-6 px-4 sm:gap-9">
        {SIZES.map((s) => {
          const isActive = s.id === size
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSize(s.id)}
              aria-pressed={isActive}
              className={
                'group flex cursor-pointer flex-col items-center gap-1.5 outline-none transition duration-200 active:scale-95 ' +
                (isActive ? 'text-[var(--accent)]' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]')
              }
            >
              <span
                aria-hidden="true"
                className={
                  'rounded-full transition-all duration-300 ' +
                  (isActive ? 'bg-[var(--accent)]' : 'bg-[var(--line)] group-hover:bg-[var(--ink-soft)]')
                }
                style={{ width: s.dot, height: s.dot }}
              />
              <span className="text-[13px] font-medium tabular-nums">{s.inches}</span>
              <span className="text-[10px] uppercase tracking-[0.18em] opacity-70">{s.label}</span>
              <span
                className={
                  'font-display text-[15px] font-semibold tabular-nums transition-opacity duration-300 ' +
                  (isActive ? 'opacity-100' : 'opacity-0')
                }
              >
                ${labelled.price + s.delta}
              </span>
            </button>
          )
        })}
      </div>

      <div className="flex w-full max-w-full items-end justify-center gap-[clamp(0.25rem,4vw,3.5rem)]">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous pizza"
          className="mb-6 grid size-10 shrink-0 sm:size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
        >
          <ChevronLeft />
        </button>

        {/* The name ring: every pizza's name sits on a circle sharing the
            pie's centre, and the whole ring turns so the active one lands at
            top dead centre. It uses labelIndex, so it turns in the same frame
            the pie starts moving. */}
        <div className="pizza-stage">
          {/* the ring is decorative markup, so the name still needs a plain
              spoken equivalent */}
          <span className="sr-only">{labelled.name}</span>

          <div
            className="name-ring"
            style={{ '--ring-rot': `${-labelIndex * RING_STEP}deg` }}
            aria-hidden="true"
          >
            {pizzas.map((p, i) => {
              // shortest way round, so the two neighbours flanking the active
              // name are the ones that stay visible
              const half = pizzas.length / 2
              const offset = ((i - labelIndex + half + pizzas.length) % pizzas.length) - half
              return (
                <span
                  key={p.id}
                  className="name-ring-item font-display"
                  style={{
                    '--a': `${i * RING_STEP}deg`,
                    opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.32 : 0,
                    color: offset === 0 ? 'var(--ink)' : 'var(--ink-soft)',
                  }}
                >
                  {p.name}
                </span>
              )
            })}
          </div>

          <div className="pizza-crop">
            <Pizza ref={currentRef} key={`slide-${current}`} pizza={pizza} className="active" />
            {incoming && (
              <Pizza
                ref={incomingRef}
                key={`slide-${incoming.index}`}
                pizza={pizzas[incoming.index]}
              />
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next pizza"
          className="mb-6 grid size-10 shrink-0 sm:size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
