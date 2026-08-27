import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import PageHeader from '../components/PageHeader'
import { categories, menu } from '../data'

export default function Menu() {
  const [filter, setFilter] = useState('All')

  const items = useMemo(
    () => (filter === 'All' ? menu : menu.filter((m) => m.category === filter)),
    [filter],
  )

  return (
    <main className="w-full flex-1">
      <PageHeader
        eyebrow="The board"
        title="Everything we"
        accent="bake"
        lede="Twelve items, one oven, forty-eight hours of dough. Pick a size on the pizza page — every pie comes in ten, twelve or fourteen inch."
      />

      {/* Category filter */}
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-2 px-6 sm:px-10">
        {['All', ...categories].map((c) => {
          const isActive = c === filter
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={isActive}
              className={
                'cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-95 ' +
                (isActive
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]'
                  : 'border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ink-soft)] hover:text-[var(--ink)]')
              }
            >
              {c}
            </button>
          )
        })}

        <span className="ml-auto text-[12px] tabular-nums text-[var(--ink-soft)]">
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* Grid */}
      <div className="mx-auto grid w-full max-w-6xl gap-x-8 gap-y-12 px-6 pb-24 pt-10 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="group flex flex-col">
            <Link
              to={`/menu/${item.id}`}
              className="block outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <ImageSlot
                    src={item.image}
                    alt={item.name}
                    ratio="4/3"
                    fit="contain"
                    label={item.name}
                    hint="add photo"
                  />
                </div>
              </div>
            </Link>

            <div className="mt-5 flex items-baseline gap-3">
              <h2 className="font-display text-[19px] font-semibold leading-tight tracking-tight text-[var(--ink)]">
                <Link to={`/menu/${item.id}`} className="transition hover:text-[var(--accent)]">
                  {item.name}
                </Link>
              </h2>
              <span
                aria-hidden="true"
                className="h-px flex-1 translate-y-[-2px] bg-[var(--line)]"
              />
              <span className="font-display text-[17px] font-semibold tabular-nums text-[var(--accent)]">
                ${item.price}
              </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{item.blurb}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ink-soft)]"
                >
                  {t}
                </span>
              ))}
              <span className="ml-auto text-[11px] tabular-nums text-[var(--ink-soft)] opacity-70">
                {item.time}
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
