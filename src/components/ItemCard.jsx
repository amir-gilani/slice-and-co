import { Link } from 'react-router-dom'
import { categoryOf } from '../data'
import ImageSlot from './ImageSlot'

/**
 * One menu item as a card — used by the menu grid and by the featured row on
 * the home page, so the two always stay in step.
 *
 * `index` only staggers the reveal animation; leave it off and the card simply
 * appears with the rest.
 */
export default function ItemCard({ item, index = 0, showCategory = false }) {
  const cat = categoryOf(item.category)

  return (
    <article
      className="item-card reveal group flex flex-col"
      style={{ '--tint': cat?.tint, '--i': index }}
    >
      {/* The photo repeats the link on the title, so it is hidden from
          assistive tech rather than announced twice — but the section badge
          sits outside that link, since it is the one thing here the title row
          does not already say. */}
      <div className="item-card-frame overflow-hidden rounded-2xl">
        <Link to={`/menu/${item.id}`} tabIndex={-1} aria-hidden="true" className="block">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <ImageSlot
              src={item.image}
              alt={item.name}
              ratio="4/3"
              fit="contain"
              label={item.name}
              icon={cat?.icon}
              tint={cat?.tint}
            />
          </div>
        </Link>

        {showCategory && cat && (
          <span className="section-chip absolute left-3 top-3">
            <span aria-hidden="true">{cat.icon}</span>
            {cat.label}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <h3 className="font-display text-[19px] font-semibold leading-tight tracking-tight text-[var(--ink)]">
          <Link
            to={`/menu/${item.id}`}
            className="outline-none transition hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]"
          >
            {item.name}
          </Link>
        </h3>
        <span aria-hidden="true" className="h-px flex-1 translate-y-[-2px] bg-[var(--line)]" />
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
  )
}
