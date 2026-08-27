import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Menu',
    links: [
      { label: 'Pizza', to: '/menu?c=pizza' },
      { label: 'Burgers', to: '/menu?c=burgers' },
      { label: 'Fried', to: '/menu?c=fried' },
      { label: 'Falafel & wraps', to: '/menu?c=falafel' },
      { label: 'Cold plates', to: '/menu?c=cold' },
      { label: 'Drinks', to: '/menu?c=drinks' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', to: '/about' },
      { label: 'Kitchens', to: '/about' },
      { label: 'Careers', to: '/about' },
      { label: 'Press', to: '/about' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'Delivery areas', to: '/contact' },
      { label: 'Allergens', to: '/contact' },
      { label: 'Track order', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--card)]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-14 sm:px-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <span className="font-display text-2xl font-bold italic tracking-tight text-[var(--accent)]">
            Slice&amp;Co
          </span>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
            Wood-fired, hand-stretched and out of the oven in ninety seconds. Baked fresh
            every day since 2014.
          </p>
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ink-soft)] opacity-70">
            Open 11am — late
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--ink-soft)]">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-[var(--ink)] transition hover:text-[var(--accent)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-[12px] text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {new Date().getFullYear()} Slice&amp;Co. All rights reserved.</p>
          <p className="flex gap-6">
            <Link to="/contact" className="transition hover:text-[var(--accent)]">Privacy</Link>
            <Link to="/contact" className="transition hover:text-[var(--accent)]">Terms</Link>
            <Link to="/contact" className="transition hover:text-[var(--accent)]">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
