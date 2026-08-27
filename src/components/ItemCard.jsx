import { Link } from 'react-router-dom'
import ImageSlot from './ImageSlot'

/**
 * One menu item as a card — used by the menu grid and by the featured row on
 * the home page, so the two always stay in step.
 */
export default function ItemCard({ item }) {
  return (
    <article className="group flex flex-col">
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
        <h3 className="font-display text-[19px] font-semibold leading-tight tracking-tight text-[var(--ink)]">
          <Link to={`/menu/${item.id}`} className="transition hover:text-[var(--accent)]">
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
