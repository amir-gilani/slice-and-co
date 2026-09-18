import { Link } from 'react-router-dom'
import CategoryTiles from '../components/CategoryTiles'
import ItemCard from '../components/ItemCard'
import PizzaSlider from '../components/PizzaSlider'
import Reviews from '../components/Reviews'
import StatStrip from '../components/StatStrip'
import { menu } from '../data'
import basil from '../assets/basil.webp'
import pepper from '../assets/pepper.webp'
import pineapple from '../assets/pineapple.webp'
import tomato from '../assets/tomato.webp'

// Loose ingredients scattered down both sides of the hero, clear of the centre
// column where the size picker and the name ring live. Positions are
// percentages so they scale with the viewport, and each keeps its own bob
// duration/delay so they never move in lockstep.
const floaters = [
  { id: 'basil-l', img: basil, cls: 'left-[4%] top-[10%]', w: 'w-[clamp(84px,10vw,152px)]', rot: -14, dur: '7s', delay: '0s' },
  { id: 'tomato-l', img: tomato, cls: 'left-[17%] top-[6%]', w: 'w-[clamp(56px,6.5vw,98px)]', rot: 12, dur: '7.8s', delay: '.9s' },
  { id: 'pepper-l', img: pepper, cls: 'left-[2%] top-[40%]', w: 'w-[clamp(66px,8vw,120px)]', rot: 10, dur: '8.4s', delay: '.5s' },
  { id: 'pineapple-l', img: pineapple, cls: 'left-[14%] top-[30%]', w: 'w-[clamp(58px,7vw,104px)]', rot: -20, dur: '9.2s', delay: '1.1s' },
  { id: 'pineapple-r', img: pineapple, cls: 'right-[5%] top-[8%]', w: 'w-[clamp(72px,9vw,136px)]', rot: -10, dur: '8.8s', delay: '.2s' },
  { id: 'basil-r', img: basil, cls: 'right-[16%] top-[26%]', w: 'w-[clamp(66px,8vw,120px)]', rot: 16, dur: '7.4s', delay: '1.4s' },
  { id: 'tomato-r', img: tomato, cls: 'right-[2%] top-[38%]', w: 'w-[clamp(62px,7.5vw,112px)]', rot: -8, dur: '9.6s', delay: '.7s' },
  { id: 'pepper-r', img: pepper, cls: 'right-[21%] top-[6%]', w: 'w-[clamp(50px,6vw,88px)]', rot: 18, dur: '8.1s', delay: '1.7s' },
]

// One from three different sections, on purpose: the hero is all pizza, so the
// first row below it is where the rest of the counter announces itself.
const featured = ['pepperoni', 'smash-classic', 'falafel-wrap'].map((id) =>
  menu.find((m) => m.id === id),
)

export default function Home() {
  return (
    <main className="w-full flex-1">
      {/* The hero keeps its own viewport-height frame and its own warm ground —
          it is a fixed composition that happens to be the first screen, not a
          section that flows with the rest. */}
      <section className="hero-band relative flex min-h-[calc(100dvh-5rem)] w-full flex-col items-center overflow-hidden px-4 pt-6 text-center sm:px-10">
        {floaters.map((f) => (
          <img
            key={f.id}
            src={f.img}
            alt=""
            aria-hidden="true"
            draggable="false"
            className={`float-produce pointer-events-none absolute hidden select-none sm:block ${f.w} ${f.cls}`}
            style={{ '--rot': `${f.rot}deg`, '--dur': f.dur, '--delay': f.delay }}
          />
        ))}

        <PizzaSlider />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-7 left-6 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--ink-soft)] opacity-60 lg:flex"
        >
          Scroll
          <span className="scroll-cue h-px w-12 origin-left bg-[var(--ink-soft)]" />
        </span>
      </section>

      {/* The counter, section by section */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-24 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
              The counter
            </span>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(1.9rem,4vw,2.8rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
              It is not only <em className="italic text-[var(--accent)]">pizza</em> back there
            </h2>
          </div>
          <p className="max-w-xs text-[14px] leading-relaxed text-[var(--ink-soft)]">
            The deck oven runs the pizza. Everything else comes off the flat top, out of the
            fryer, or straight from the cold bench.
          </p>
        </div>

        <div className="mt-12">
          <CategoryTiles />
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-28 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
              Off the board
            </span>
            <h2 className="font-display mt-4 max-w-lg text-[clamp(1.9rem,4vw,2.8rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
              The three that go out <em className="italic text-[var(--accent)]">fastest</em>
            </h2>
          </div>
          <Link
            to="/menu"
            className="rounded-full border border-[var(--line)] px-6 py-3 text-[13px] font-medium text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            See the full menu
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {featured.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} showCategory />
          ))}
        </div>
      </section>

      {/* Method */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-28 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
              How it is made
            </span>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
              Two days of dough, ninety seconds of fire
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-[var(--ink-soft)]">
            Every ball is mixed at eleven at night and rested cold for forty-eight hours. That
            slow ferment is what gives the rim its blister — and it is why, when the dough runs
            out, the shutter comes down.
          </p>
        </div>

        <div className="mt-12">
          <StatStrip />
        </div>
      </section>

      <Reviews />

      {/* Closing CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28 sm:px-10">
        <div className="flex flex-col items-center gap-7 rounded-3xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--crust)_5%,var(--card))] px-8 py-20 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
            Open 11am — late
          </span>
          <h2 className="font-display max-w-xl text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--ink)]">
            Hungry now? It is thirty minutes to your door
          </h2>
          <Link
            to="/menu"
            className="cursor-pointer rounded-full bg-[var(--accent)] px-9 py-4 text-[14px] font-semibold text-[var(--accent-ink)] transition hover:brightness-105 active:scale-[0.98]"
          >
            Start an order
          </Link>
        </div>
      </section>
    </main>
  )
}
