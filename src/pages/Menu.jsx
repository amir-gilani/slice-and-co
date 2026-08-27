import { useMemo, useState } from 'react'
import ItemCard from '../components/ItemCard'
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
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}
