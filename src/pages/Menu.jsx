import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import PageHeader from '../components/PageHeader'
import { categories, menu } from '../data'

/** Name, blurb, tags and ingredients are all fair game for the search box. */
const matches = (item, q) =>
  [item.name, item.blurb, ...item.tags, ...item.ingredients]
    .join(' ')
    .toLowerCase()
    .includes(q)

export default function Menu() {
  // The section lives in the URL, so /menu?c=burgers is a real link — the home
  // page tiles and the footer point straight at a section, and Back works.
  const [params, setParams] = useSearchParams()
  const active = params.get('c') ?? 'all'
  const [query, setQuery] = useState('')

  const setActive = (id) => {
    // Replace, not push: flicking through eight sections should not bury the
    // page you arrived from under eight history entries.
    setParams(id === 'all' ? {} : { c: id }, { replace: true })
  }

  const q = query.trim().toLowerCase()

  const found = useMemo(() => {
    const byCat = active === 'all' ? menu : menu.filter((m) => m.category === active)
    return q ? byCat.filter((m) => matches(m, q)) : byCat
  }, [active, q])

  // Searching or picking one section flattens the board into a single grid;
  // otherwise it stays split into the sections you would read on the wall.
  const grouped = active === 'all' && !q
  const sections = categories
    .map((c) => ({ ...c, items: found.filter((m) => m.category === c.id) }))
    .filter((c) => c.items.length)

  const activeLabel = categories.find((c) => c.id === active)?.label

  return (
    <main className="w-full flex-1">
      <PageHeader
        eyebrow="The board"
        title="Everything off the"
        accent="counter"
        lede="Pizza out of the deck oven, burgers off the flat top, falafel rolled to order, and the fryer running all day. Thirty-nine things, one kitchen."
      />

      {/* Section rail — sticks to the top so the board stays navigable however
          far down you are. */}
      <div className="menu-rail sticky top-0 z-30">
        <div className="mx-auto w-full max-w-6xl px-6 py-3 sm:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* One line, always — the chips and the search box read as a single
                toolbar. The chips never wrap; when they run out of room they
                swipe sideways instead (min-w-0 is what lets the row shrink and
                scroll rather than push the search box off the end). */}
            <div className="rail-scroll -mx-1 flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 py-1">
              <Chip
                active={active === 'all'}
                onClick={() => setActive('all')}
                label="Everything"
              />
              {categories.map((c) => (
                <Chip
                  key={c.id}
                  active={active === c.id}
                  onClick={() => setActive(c.id)}
                  label={c.short ?? c.label}
                  icon={c.icon}
                  tint={c.tint}
                />
              ))}
            </div>

            <label className="search-field flex shrink-0 items-center gap-2 sm:w-44 lg:w-52">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 opacity-45">
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m16 16 4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the menu"
                aria-label="Search the menu"
                className="w-full bg-transparent text-[13px] outline-none placeholder:text-[var(--ink-soft)] placeholder:opacity-60"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-12 sm:px-10">
        {found.length === 0 && (
          <p className="py-16 text-center text-[15px] text-[var(--ink-soft)]">
            Nothing on the board matches “{query}”. The kitchen will pretend you never asked.
          </p>
        )}

        {grouped
          ? sections.map((section) => (
              <section key={section.id} className="mb-24 last:mb-0 scroll-mt-24" id={section.id}>
                <SectionHead section={section} />
                <Grid items={section.items} />
              </section>
            ))
          : found.length > 0 && (
              <>
                {/* The grouped board carries a count in every section heading.
                    This view has no headings, so it says what it is showing —
                    which is also where the counts went when the chips lost
                    theirs to fit on one line. */}
                <p className="mb-8 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  {found.length} {found.length === 1 ? 'item' : 'items'}
                  {activeLabel && <span className="opacity-60"> in {activeLabel}</span>}
                </p>
                <Grid items={found} />
              </>
            )}
      </div>
    </main>
  )
}

function Grid({ items }) {
  return (
    <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <ItemCard key={item.id} item={item} index={i} />
      ))}
    </div>
  )
}

function SectionHead({ section }) {
  return (
    <header
      className="mb-10 flex flex-wrap items-end gap-x-5 gap-y-2 border-b pb-5"
      style={{ '--tint': section.tint, borderColor: 'color-mix(in srgb, var(--tint) 28%, var(--line))' }}
    >
      <h2 className="font-display flex items-center gap-3 text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-none tracking-tight text-[var(--ink)]">
        <span aria-hidden="true" className="section-head-glyph">
          {section.icon}
        </span>
        {section.label}
      </h2>
      <p className="flex-1 text-[13px] leading-relaxed text-[var(--ink-soft)]">{section.tagline}</p>
      <span className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)] opacity-70">
        {section.items.length} {section.items.length === 1 ? 'item' : 'items'}
      </span>
    </header>
  )
}

function Chip({ active, onClick, label, icon, tint }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cat-chip ${active ? 'is-active' : ''}`}
      style={tint ? { '--tint': tint } : undefined}
    >
      {icon && (
        <span aria-hidden="true" className="text-[15px] leading-none">
          {icon}
        </span>
      )}
      {label}
    </button>
  )
}
