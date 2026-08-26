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
  return (
    <div className="stage flex h-dvh w-full flex-col overflow-hidden bg-[var(--bg)]">
      <nav className="relative z-20 flex w-full items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-display text-2xl font-bold italic tracking-tight text-[var(--accent)] sm:text-[1.7rem]">
          Slice&amp;Co
        </span>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm font-medium text-[var(--ink)] transition hover:text-[var(--accent)]"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Account"
            className="grid size-10 place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
          >
            <UserIcon />
          </button>
          <button
            type="button"
            aria-label="Cart, 1 item"
            className="relative grid size-10 place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
          >
            <CartIcon />
            <span className="absolute -right-1 -top-1 grid size-[18px] place-items-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-[var(--accent-ink)]">
              1
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
