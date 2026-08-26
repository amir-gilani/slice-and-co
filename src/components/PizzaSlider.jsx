import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { pizzas } from '../data'
import { ChevronLeft, ChevronRight } from './Icons'
import Pizza from './Pizza'

const DURATION = 500

export default function PizzaSlider() {
  // `current` is the pizza that owns the active position — the name tag reads
  // from it, so it only advances once the incoming slide has actually landed.
  const [current, setCurrent] = useState(0)
  const [incoming, setIncoming] = useState(null) // { index, dir }

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

  return (
    <div className="mt-auto flex w-full flex-col items-center">
      <div className="flex w-full max-w-full items-end justify-center gap-[clamp(0.25rem,4vw,3.5rem)]">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous pizza"
          className="mb-6 grid size-10 shrink-0 sm:size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
        >
          <ChevronLeft />
        </button>

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
