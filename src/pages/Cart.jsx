import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import PageHeader from '../components/PageHeader'
import { useCart } from '../cart-store'
import { categoryOf } from '../data'

const DELIVERY = 3.5

export default function Cart() {
  const { lines, setQty, remove, count, subtotal } = useCart()
  const total = subtotal + (lines.length ? DELIVERY : 0)

  if (!lines.length) {
    return (
      <main className="w-full flex-1">
        <PageHeader eyebrow="Your order" title="The box is" accent="empty" />
        <div className="mx-auto w-full max-w-6xl px-6 pb-32 sm:px-10">
          <p className="max-w-md text-[15px] leading-relaxed text-[var(--ink-soft)]">
            Nothing in the order yet. Pick something off the board — pizza, a burger, a wrap,
            a cold drink — and it will show up here.
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-[14px] font-semibold text-[var(--accent-ink)] transition hover:brightness-105 active:scale-[0.98]"
          >
            Browse the menu
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="w-full flex-1">
      <PageHeader
        eyebrow="Your order"
        title="Ready when"
        accent="you are"
        lede={`${count} ${count === 1 ? 'item' : 'items'} in the box. Delivery runs 30–40 minutes across the city.`}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 sm:px-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        {/* Lines */}
        <ul className="divide-y divide-[var(--line)] border-b border-[var(--line)]">
          {lines.map((l) => (
            <li key={l.key} className="flex gap-5 py-6">
              <div className="w-24 shrink-0 sm:w-28">
                <ImageSlot
                  src={l.image}
                  alt={l.name}
                  ratio="1/1"
                  fit="contain"
                  label={l.name}
                  icon={categoryOf(l.category)?.icon}
                  tint={categoryOf(l.category)?.tint}
                  rounded="rounded-xl"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-[17px] font-semibold tracking-tight text-[var(--ink)]">
                    <Link to={`/menu/${l.id}`} className="transition hover:text-[var(--accent)]">
                      {l.name}
                    </Link>
                  </h2>
                  <span aria-hidden="true" className="h-px flex-1 bg-[var(--line)]" />
                  <span className="font-display text-[16px] font-semibold tabular-nums text-[var(--ink)]">
                    ${(l.price * l.qty).toFixed(2).replace(/\.00$/, '')}
                  </span>
                </div>

                {/* Baskets saved before the menu grew past pizza carry a
                    "crust" where a line now carries the generic "variant" —
                    read both, so a stored order does not come back with half
                    its line missing. */}
                <p className="mt-1.5 text-[12px] text-[var(--ink-soft)]">
                  {[l.size, l.variant ?? l.crust, l.extras?.join(', ')].filter(Boolean).join(' · ')}
                </p>

                <div className="mt-auto flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1 rounded-full border border-[var(--line)] p-0.5">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(l.key, l.qty - 1)}
                      className="grid size-7 cursor-pointer place-items-center rounded-full text-[var(--ink)] transition hover:bg-[color-mix(in_srgb,var(--line)_55%,transparent)] active:scale-95"
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-[13px] font-medium tabular-nums">{l.qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(l.key, l.qty + 1)}
                      className="grid size-7 cursor-pointer place-items-center rounded-full text-[var(--ink)] transition hover:bg-[color-mix(in_srgb,var(--line)_55%,transparent)] active:scale-95"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(l.key)}
                    className="cursor-pointer text-[12px] text-[var(--ink-soft)] underline underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7">
            <h2 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--ink-soft)]">
              Summary
            </h2>

            <dl className="mt-6 space-y-3 text-[14px]">
              <Row k="Subtotal" v={`$${subtotal.toFixed(2)}`} />
              <Row k="Delivery" v={`$${DELIVERY.toFixed(2)}`} />
              <Row k="Estimated time" v="30–40 min" muted />
            </dl>

            <div className="mt-6 flex items-baseline justify-between border-t border-[var(--line)] pt-5">
              <span className="text-[13px] font-medium text-[var(--ink)]">Total</span>
              <span className="font-display text-[24px] font-semibold tabular-nums text-[var(--accent)]">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="mt-7 w-full cursor-pointer rounded-full bg-[var(--accent)] px-6 py-4 text-[14px] font-semibold text-[var(--accent-ink)] transition hover:brightness-105 active:scale-[0.98]"
            >
              Checkout
            </button>

            <Link
              to="/menu"
              className="mt-3 block w-full rounded-full border border-[var(--line)] px-6 py-3.5 text-center text-[13px] font-medium text-[var(--ink)] transition hover:border-[var(--ink-soft)]"
            >
              Add something else
            </Link>

            <p className="mt-5 text-[11px] leading-relaxed text-[var(--ink-soft)]">
              Free delivery over $40. Card, cash and contactless on arrival.
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}

function Row({ k, v, muted }) {
  return (
    <div className="flex items-baseline justify-between">
      <dt className="text-[var(--ink-soft)]">{k}</dt>
      <dd className={`tabular-nums ${muted ? 'text-[var(--ink-soft)]' : 'text-[var(--ink)]'}`}>{v}</dd>
    </div>
  )
}
