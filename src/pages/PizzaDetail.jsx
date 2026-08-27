import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import { useCart } from '../cart-store'
import { findItem, menu } from '../data'

const SIZES = [
  { id: 's', label: 'Small', inches: '10"', delta: -3 },
  { id: 'm', label: 'Medium', inches: '12"', delta: 0 },
  { id: 'l', label: 'Large', inches: '14"', delta: 4 },
]

const CRUSTS = [
  { id: 'classic', label: 'Classic', note: '48-hour, hand-stretched', delta: 0 },
  { id: 'thin', label: 'Roman thin', note: 'crisp, cracker-thin', delta: 0 },
  { id: 'stuffed', label: 'Stuffed crust', note: 'mozzarella-filled rim', delta: 2 },
]

const EXTRAS = [
  { id: 'cheese', label: 'Extra mozzarella', price: 2 },
  { id: 'nduja', label: 'Nduja', price: 2.5 },
  { id: 'basil', label: 'Fresh basil', price: 1 },
  { id: 'honey', label: 'Chilli honey', price: 1.5 },
]

export default function PizzaDetail() {
  const { id } = useParams()
  const item = findItem(id)

  const [size, setSize] = useState('m')
  const [crust, setCrust] = useState('classic')
  const [extras, setExtras] = useState([])
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const { add } = useCart()

  if (!item) {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-32 text-center sm:px-10">
        <h1 className="font-display text-3xl font-semibold text-[var(--ink)]">
          We do not bake that one
        </h1>
        <Link to="/menu" className="mt-6 inline-block text-sm text-[var(--accent)] underline">
          Back to the menu
        </Link>
      </main>
    )
  }

  const activeSize = SIZES.find((s) => s.id === size)
  const activeCrust = CRUSTS.find((c) => c.id === crust)
  const extrasTotal = extras.reduce(
    (n, e) => n + (EXTRAS.find((x) => x.id === e)?.price ?? 0),
    0,
  )
  const unit = item.price + activeSize.delta + activeCrust.delta + extrasTotal
  const total = (unit * qty).toFixed(2).replace(/\.00$/, '')

  const toggleExtra = (extraId) =>
    setExtras((prev) =>
      prev.includes(extraId) ? prev.filter((e) => e !== extraId) : [...prev, extraId],
    )

  const onAdd = () => {
    add(
      {
        id: item.id,
        name: item.name,
        image: item.image,
        size: activeSize.inches,
        crust: activeCrust.label,
        extras: extras.map((e) => EXTRAS.find((x) => x.id === e).label),
        price: unit,
      },
      qty,
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = menu.filter((m) => m.id !== item.id && m.category === item.category).slice(0, 3)

  return (
    <main className="w-full flex-1">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10 sm:px-10">
        <nav className="flex items-center gap-2 text-[12px] text-[var(--ink-soft)]">
          <Link to="/menu" className="transition hover:text-[var(--accent)]">
            Menu
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[var(--ink)]">{item.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Photo side — sticks while the long builder column scrolls */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <ImageSlot
            src={item.image}
            alt={item.name}
            ratio="1/1"
            fit="contain"
            label={item.name}
            hint="hero photo — square"
            rounded="rounded-3xl"
          />

          <div className="mt-4 grid grid-cols-3 gap-4">
            {['detail', 'in the oven', 'on the table'].map((l) => (
              <ImageSlot key={l} ratio="1/1" label={l} rounded="rounded-xl" />
            ))}
          </div>
        </div>

        {/* Builder side */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ink-soft)]"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-display mt-4 text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight text-[var(--ink)]">
            {item.name}
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--ink-soft)]">
            {item.description}
          </p>

          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-3 border-y border-[var(--line)] py-4 text-[13px]">
            {[
              ['Bake time', item.time],
              ['Per slice', `${item.kcal} kcal`],
              ['Category', item.category],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">{k}</dt>
                <dd className="mt-1 font-medium text-[var(--ink)]">{v}</dd>
              </div>
            ))}
          </dl>

          {/* Size */}
          <Fieldset legend="Size">
            <div className="grid grid-cols-3 gap-3">
              {SIZES.map((s) => (
                <Option
                  key={s.id}
                  active={s.id === size}
                  onClick={() => setSize(s.id)}
                  title={s.inches}
                  note={s.label}
                />
              ))}
            </div>
          </Fieldset>

          {/* Crust */}
          <Fieldset legend="Crust">
            <div className="grid gap-3 sm:grid-cols-3">
              {CRUSTS.map((c) => (
                <Option
                  key={c.id}
                  active={c.id === crust}
                  onClick={() => setCrust(c.id)}
                  title={c.label}
                  note={c.note}
                  extra={c.delta ? `+$${c.delta}` : null}
                />
              ))}
            </div>
          </Fieldset>

          {/* Extras */}
          <Fieldset legend="Add extras">
            <div className="grid gap-2 sm:grid-cols-2">
              {EXTRAS.map((e) => {
                const on = extras.includes(e.id)
                return (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => toggleExtra(e.id)}
                    aria-pressed={on}
                    className={
                      'flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-[13px] outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ' +
                      (on
                        ? 'border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]'
                        : 'border-[var(--line)] hover:border-[var(--ink-soft)]')
                    }
                  >
                    <span
                      aria-hidden="true"
                      className={
                        'grid size-4 shrink-0 place-items-center rounded-[5px] border transition ' +
                        (on ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--line)]')
                      }
                    >
                      {on && (
                        <svg viewBox="0 0 12 12" className="size-3 text-[var(--accent-ink)]">
                          <path
                            d="m2.5 6.2 2.3 2.3 4.7-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="flex-1 text-[var(--ink)]">{e.label}</span>
                    <span className="tabular-nums text-[var(--ink-soft)]">+${e.price}</span>
                  </button>
                )
              })}
            </div>
          </Fieldset>

          {/* Add to cart */}
          <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-7">
            <div className="flex items-center gap-1 rounded-full border border-[var(--line)] p-1">
              <Stepper label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                −
              </Stepper>
              <span className="w-8 text-center text-[15px] font-medium tabular-nums">{qty}</span>
              <Stepper label="Increase quantity" onClick={() => setQty((q) => Math.min(20, q + 1))}>
                +
              </Stepper>
            </div>

            <button
              type="button"
              onClick={onAdd}
              className="group flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-[14px] font-semibold text-[var(--accent-ink)] outline-none transition duration-200 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.98]"
            >
              {added ? 'Added to order' : 'Add to order'}
              <span className="font-display tabular-nums">${total}</span>
            </button>
          </div>

          <p className="mt-4 text-[12px] text-[var(--ink-soft)]">
            Ingredients: {item.ingredients.join(' · ')}
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-[var(--line)]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Also in {item.category}
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} to={`/menu/${r.id}`} className="group block">
                  <ImageSlot src={r.image} alt={r.name} ratio="4/3" fit="contain" label={r.name} />
                  <div className="mt-4 flex items-baseline gap-3">
                    <h3 className="font-display text-[16px] font-semibold text-[var(--ink)] transition group-hover:text-[var(--accent)]">
                      {r.name}
                    </h3>
                    <span aria-hidden="true" className="h-px flex-1 bg-[var(--line)]" />
                    <span className="font-display text-[15px] font-semibold tabular-nums text-[var(--accent)]">
                      ${r.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

function Fieldset({ legend, children }) {
  return (
    <fieldset className="mt-8">
      <legend className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--ink-soft)]">
        {legend}
      </legend>
      {children}
    </fieldset>
  )
}

function Option({ active, onClick, title, note, extra }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        'cursor-pointer rounded-xl border px-4 py-3 text-left outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.98] ' +
        (active
          ? 'border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]'
          : 'border-[var(--line)] hover:border-[var(--ink-soft)]')
      }
    >
      <span className="flex items-baseline gap-2">
        <span className="text-[15px] font-medium text-[var(--ink)]">{title}</span>
        {extra && <span className="text-[11px] tabular-nums text-[var(--accent)]">{extra}</span>}
      </span>
      <span className="mt-1 block text-[11px] leading-snug text-[var(--ink-soft)]">{note}</span>
    </button>
  )
}

function Stepper({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-9 cursor-pointer place-items-center rounded-full text-[16px] text-[var(--ink)] outline-none transition hover:bg-[color-mix(in_srgb,var(--line)_55%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-95"
    >
      {children}
    </button>
  )
}
