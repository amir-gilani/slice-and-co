import { useState } from 'react'
import { CartIcon, UserIcon } from './components/Icons'
import PizzaSlider from './components/PizzaSlider'

// Floating produce scattered around the hero, mirrored left/right like the
// reference layout. Positions are percentages so they scale with the viewport.
const floaters = [
  { id: 'basil-l', emoji: '🌿', cls: 'left-[6%] top-[10%]', size: 'text-5xl', rot: -14, dur: '7s', delay: '0s' },
  { id: 'olive-l', emoji: '🫒', cls: 'left-[3%] top-[40%]', size: 'text-4xl', rot: 10, dur: '8.4s', delay: '.5s' },
  { id: 'chilli-l', emoji: '🌶️', cls: 'left-[15%] top-[44%]', size: 'text-4xl', rot: -22, dur: '9.2s', delay: '1.1s' },
  { id: 'tomato-l', emoji: '🍅', cls: 'left-[9%] top-[64%]', size: 'text-5xl', rot: 8, dur: '7.8s', delay: '.9s' },
  { id: 'tomato-r', emoji: '🍅', cls: 'right-[7%] top-[9%]', size: 'text-5xl', rot: -10, dur: '8.8s', delay: '.2s' },
  { id: 'basil-r', emoji: '🌿', cls: 'right-[15%] top-[41%]', size: 'text-4xl', rot: 16, dur: '7.4s', delay: '1.4s' },
  { id: 'olive-r', emoji: '🫒', cls: 'right-[3%] top-[38%]', size: 'text-4xl', rot: -8, dur: '9.6s', delay: '.7s' },
  { id: 'shroom-r', emoji: '🍄', cls: 'right-[8%] top-[62%]', size: 'text-5xl', rot: 12, dur: '8.1s', delay: '1.7s' },
]

const links = ['Home', 'Menu', 'Contact']

export default function App() {
  const [active, setActive] = useState(links[0])
  const [accountOpen, setAccountOpen] = useState(false)
  const [cart, setCart] = useState(1)

  return (
    <div className="stage flex h-dvh w-full flex-col overflow-hidden bg-[var(--bg)]">
      <nav className="relative z-20 flex w-full items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-display text-2xl font-bold italic tracking-tight text-[var(--accent)] sm:text-[1.7rem]">
          Slice&amp;Co
        </span>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--card)] p-1 md:flex">
          {links.map((l) => {
            const isActive = l === active
            return (
              <button
                key={l}
                type="button"
                onClick={() => setActive(l)}
                aria-current={isActive ? 'page' : undefined}
                className={
                  'cursor-pointer rounded-full px-4 py-1.5 text-[13px] font-medium transition duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card)] active:scale-95 ' +
                  (isActive
                    ? 'bg-[var(--accent)] text-[var(--accent-ink)] shadow-sm'
                    : 'text-[var(--ink-soft)] hover:bg-[color-mix(in_srgb,var(--line)_55%,transparent)] hover:text-[var(--ink)]')
                }
              >
                {l}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Account"
            aria-pressed={accountOpen}
            onClick={() => setAccountOpen((v) => !v)}
            className={
              'grid size-10 cursor-pointer place-items-center rounded-full border transition duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-95 ' +
              (accountOpen
                ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]'
                : 'border-[var(--line)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]')
            }
          >
            <UserIcon />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${cart} ${cart === 1 ? 'item' : 'items'}`}
            onClick={() => setCart((c) => c + 1)}
            className="relative grid size-10 cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] transition duration-200 outline-none hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-95"
          >
            <CartIcon />
            <span
              key={cart}
              className="cart-badge absolute -right-1 -top-1 grid size-[18px] place-items-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--accent-ink)]"
            >
              {cart}
            </span>
          </button>
        </div>
      </nav>

      <main className="relative flex w-full flex-1 flex-col items-center overflow-hidden px-4 pt-6 text-center sm:px-10">
        {floaters.map((f) => (
          <span
            key={f.id}
            aria-hidden="true"
            className={`float-emoji pointer-events-none absolute hidden select-none opacity-90 sm:block ${f.size} ${f.cls}`}
            style={{ '--rot': `${f.rot}deg`, '--dur': f.dur, '--delay': f.delay }}
          >
            {f.emoji}
          </span>
        ))}

        <PizzaSlider />
      </main>
    </div>
  )
}
