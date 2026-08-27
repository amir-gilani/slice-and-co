import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../cart-store'
import { CartIcon, UserIcon } from './Icons'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const { count } = useCart()
  const { pathname } = useLocation()

  return (
    <nav className="relative z-20 flex w-full shrink-0 items-center justify-between px-6 py-5 sm:px-10">
      <Link
        to="/"
        className="font-display text-2xl font-bold italic tracking-tight text-[var(--accent)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)] sm:text-[1.7rem]"
      >
        Slice&amp;Co
      </Link>

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--card)] p-1 md:flex">
        {links.map((l) => {
          // /menu/:id should keep the Menu tab lit
          const isActive = l.to === '/' ? pathname === '/' : pathname.startsWith(l.to)
          return (
            <NavLink
              key={l.to}
              to={l.to}
              className={
                'rounded-full px-4 py-1.5 text-[13px] font-medium outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)] active:scale-95 ' +
                (isActive
                  ? 'bg-[var(--accent)] text-[var(--accent-ink)] shadow-sm'
                  : 'text-[var(--ink-soft)] hover:bg-[color-mix(in_srgb,var(--line)_55%,transparent)] hover:text-[var(--ink)]')
              }
            >
              {l.label}
            </NavLink>
          )
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Account"
          className="grid size-10 cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] outline-none transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-95"
        >
          <UserIcon />
        </button>
        <Link
          to="/cart"
          aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}
          className="relative grid size-10 cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] outline-none transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-95"
        >
          <CartIcon />
          {count > 0 && (
            <span
              key={count}
              className="cart-badge absolute -right-1 -top-1 grid size-[18px] place-items-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--accent-ink)]"
            >
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
