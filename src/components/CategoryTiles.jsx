import { Link } from 'react-router-dom'
import { categories, menu } from '../data'

/**
 * The eight sections of the counter, as tiles.
 *
 * Each one deep-links into the menu with its section already picked
 * (/menu?c=burgers), which is why the tile is a Link and not a button that
 * scrolls: arriving from here, from the footer or from a shared URL all land
 * in exactly the same place.
 */
export default function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {categories.map((c, i) => {
        const count = menu.filter((m) => m.category === c.id).length
        return (
          <Link
            key={c.id}
            to={`/menu?c=${c.id}`}
            className="cat-tile reveal group"
            style={{ '--tint': c.tint, '--i': i }}
          >
            <span aria-hidden="true" className="cat-tile-glyph">
              {c.icon}
            </span>

            <span className="mt-auto flex items-baseline gap-2">
              <span className="font-display text-[17px] font-semibold tracking-tight text-[var(--ink)]">
                {c.label}
              </span>
              <span className="text-[11px] tabular-nums text-[var(--ink-soft)] opacity-70">
                {count}
              </span>
            </span>

            <span className="mt-1.5 block text-[12px] leading-snug text-[var(--ink-soft)]">
              {c.tagline}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
