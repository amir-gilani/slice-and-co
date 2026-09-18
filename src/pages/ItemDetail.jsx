import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import { useCart } from '../cart-store'
import { builderFor, categoryOf, findItem, menu } from '../data'

/**
 * One screen builds every item on the menu.
 *
 * The shape is always the same — a size, an either/or choice, some extras —
 * but the words come from the section's builder in data.js, so a drink asks
 * for a glass size and a pizza asks for a crust without this file knowing
 * anything about either.
 */
export default function ItemDetail() {
  const { id } = useParams()
  const item = findItem(id)

  if (!item) return <NotOnTheBoard />
  // Remounting per item resets size/extras between pages — a keyed component
  // rather than an effect chasing `id` around.
  return <Builder key={item.id} item={item} />
}

function Builder({ item }) {
  const cat = categoryOf(item.category)
  const builder = builderFor(item.category)
  const { add } = useCart()

  const [size, setSize] = useState(builder.size.options[0].id)
  const [variant, setVariant] = useState(builder.variant?.options[0].id ?? null)
  const [extras, setExtras] = useState([])
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  // Clear the "Added" flash if the page goes away before it times out.
  useEffect(() => {
    if (!added) return undefined
    const t = setTimeout(() => setAdded(false), 2000)
    return () => clearTimeout(t)
  }, [added])

  const activeSize = builder.size.options.find((s) => s.id === size)
  const activeVariant = builder.variant?.options.find((v) => v.id === variant)
  const extraList = builder.extras?.options ?? []

  const extrasTotal = extras.reduce(
    (n, e) => n + (extraList.find((x) => x.id === e)?.price ?? 0),
    0,
  )
  const unit = item.price + activeSize.delta + (activeVariant?.delta ?? 0) + extrasTotal
  const total = money(unit * qty)

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
        category: item.category,
        size: activeSize.title,
        variant: activeVariant?.title ?? null,
        extras: extras.map((e) => extraList.find((x) => x.id === e).label),
        price: unit,
      },
      qty,
    )
    setAdded(true)
  }

  const related = useMemo(
    () => menu.filter((m) => m.id !== item.id && m.category === item.category).slice(0, 3),
    [item],
  )

  return (
    <main className="w-full flex-1" style={{ '--tint': cat?.tint }}>
      <div className="mx-auto w-full max-w-6xl px-6 pt-10 sm:px-10">
        <nav className="flex flex-wrap items-center gap-2 text-[12px] text-[var(--ink-soft)]">
          <Link to="/menu" className="transition hover:text-[var(--accent)]">
            Menu
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={`/menu?c=${item.category}`} className="transition hover:text-[var(--accent)]">
            {cat?.label ?? item.category}
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
            icon={cat?.icon}
            tint={cat?.tint}
            rounded="rounded-3xl"
          />

          {/* There was a row of three supporting frames here — detail, in the
              oven, on the table. Every item has its hero shot now and none has
              a second one, so all it did was print three empty tiles under a
              real photo on all thirty-nine pages. It comes back the day there
              are actual gallery shots to put in it. */}
        </div>

        {/* Builder side */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Link to={`/menu?c=${item.category}`} className="section-chip is-link">
              <span aria-hidden="true">{cat?.icon}</span>
              {cat?.label}
            </Link>
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
              ['Ready in', item.time],
              ['Per serving', `${item.kcal} kcal`],
              ['Section', cat?.label ?? item.category],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                  {k}
                </dt>
                <dd className="mt-1 font-medium text-[var(--ink)]">{v}</dd>
              </div>
            ))}
          </dl>

          <Fieldset legend={builder.size.legend}>
            <div className="grid gap-3" style={{ gridTemplateColumns: cols(builder.size.options) }}>
              {builder.size.options.map((s) => (
                <Option
                  key={s.id}
                  active={s.id === size}
                  onClick={() => setSize(s.id)}
                  title={s.title}
                  note={s.note}
                  extra={s.delta > 0 ? `+$${money(s.delta)}` : null}
                />
              ))}
            </div>
          </Fieldset>

          {builder.variant && (
            <Fieldset legend={builder.variant.legend}>
              <div
                className="grid gap-3"
                style={{ gridTemplateColumns: cols(builder.variant.options) }}
              >
                {builder.variant.options.map((v) => (
                  <Option
                    key={v.id}
                    active={v.id === variant}
                    onClick={() => setVariant(v.id)}
                    title={v.title}
                    note={v.note}
                    extra={v.delta > 0 ? `+$${money(v.delta)}` : null}
                  />
                ))}
              </div>
            </Fieldset>
          )}

          {extraList.length > 0 && (
            <Fieldset legend={builder.extras.legend}>
              <div className="grid gap-2 sm:grid-cols-2">
                {extraList.map((e) => {
                  const on = extras.includes(e.id)
                  return (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => toggleExtra(e.id)}
                      aria-pressed={on}
                      className={`extra-row ${on ? 'is-on' : ''}`}
                    >
                      <span aria-hidden="true" className={`extra-box ${on ? 'is-on' : ''}`}>
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
                      <span className="tabular-nums text-[var(--ink-soft)]">+${money(e.price)}</span>
                    </button>
                  )
                })}
              </div>
            </Fieldset>
          )}

          {/* Add to cart */}
          <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-7">
            <div className="flex items-center gap-1 rounded-full border border-[var(--line)] p-1">
              <Stepper label="Decrease quantity" onClick={() => setQty((n) => Math.max(1, n - 1))}>
                −
              </Stepper>
              <span className="w-8 text-center text-[15px] font-medium tabular-nums">{qty}</span>
              <Stepper label="Increase quantity" onClick={() => setQty((n) => Math.min(20, n + 1))}>
                +
              </Stepper>
            </div>

            <button
              type="button"
              onClick={onAdd}
              className="flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-[14px] font-semibold text-[var(--accent-ink)] outline-none transition duration-200 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.98]"
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

      {related.length > 0 && (
        <section className="border-t border-[var(--line)]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Also in {cat?.label ?? item.category}
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} to={`/menu/${r.id}`} className="group block">
                  <div className="item-card-frame overflow-hidden rounded-2xl">
                    <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                      <ImageSlot
                        src={r.image}
                        alt={r.name}
                        ratio="4/3"
                        fit="contain"
                        label={r.name}
                        icon={cat?.icon}
                        tint={cat?.tint}
                      />
                    </div>
                  </div>
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

/** Two-option groups read better as halves than as thirds with a gap. */
const cols = (options) => `repeat(${Math.min(options.length, 3)}, minmax(0, 1fr))`

/** $2.50 stays $2.50; $2.00 becomes $2. */
const money = (n) => n.toFixed(2).replace(/\.00$/, '')

function NotOnTheBoard() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-32 text-center sm:px-10">
      <h1 className="font-display text-3xl font-semibold text-[var(--ink)]">
        We do not make that one
      </h1>
      <Link to="/menu" className="mt-6 inline-block text-sm text-[var(--accent)] underline">
        Back to the menu
      </Link>
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
      className={`option-tile ${active ? 'is-active' : ''}`}
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
