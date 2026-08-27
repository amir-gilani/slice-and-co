import { Link } from 'react-router-dom'
import ImageSlot from '../components/ImageSlot'
import PageHeader from '../components/PageHeader'
import StatStrip from '../components/StatStrip'

const values = [
  {
    t: 'One dough, no shortcuts',
    d: 'Flour, water, salt, a little yeast and two days. It is mixed at night and used the day after next — never sooner, never frozen.',
  },
  {
    t: 'Bought the same morning',
    d: 'Tomatoes, herbs and cheese arrive before we open. What is not used goes home with the team rather than into tomorrow.',
  },
  {
    t: 'Cooked in front of you',
    d: 'The pass is the counter. Every pie is stretched, dressed and fired within arm’s reach of the person who ordered it.',
  },
]

const team = [
  { name: 'Head of dough', role: 'Since 2014' },
  { name: 'Oven', role: 'Since 2016' },
  { name: 'Front of house', role: 'Since 2019' },
  { name: 'Sourcing', role: 'Since 2021' },
]

export default function About() {
  return (
    <main className="w-full flex-1">
      <PageHeader
        eyebrow="Our story"
        title="One oven, two doors down from where we"
        accent="started"
        lede="Slice&Co began as a single deck oven in a room with four tables. The dough recipe has not changed since — the queue outside is the only thing that has."
      />

      {/* Wide opening image */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <ImageSlot ratio="21/9" label="The kitchen" hint="wide shot — 21:9" rounded="rounded-3xl" />
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 w-full max-w-6xl px-6 sm:px-10">
        <StatStrip />
      </div>

      {/* Story: text + image alternating */}
      <section className="mx-auto mt-24 grid w-full max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
            The dough
          </span>
          <h2 className="font-display mt-5 text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
            Two days before you order it
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
            Every ball is mixed at eleven at night, rested cold for forty-eight hours, then
            brought up to room temperature four hours before service. That long, slow ferment
            is what gives the rim its blister and the crumb its chew — and it is the reason we
            cannot make more than the fridge holds.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
            When the dough runs out, the shutter comes down. Some nights that is eleven, some
            nights it is nine.
          </p>
        </div>
        <ImageSlot ratio="4/3" label="Dough table" hint="4:3" rounded="rounded-3xl" />
      </section>

      <section className="mx-auto mt-24 grid w-full max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ImageSlot ratio="4/3" label="The oven" hint="4:3" rounded="rounded-3xl" className="lg:order-1" />
        <div className="lg:order-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
            The fire
          </span>
          <h2 className="font-display mt-5 text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
            Ninety seconds, beech and oak
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
            The floor sits at 450°C and the dome runs hotter. A pizza goes in, gets turned
            twice and comes out before the toppings have time to stew — which is the whole
            point of a fire this size.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto mt-28 w-full max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 border-t border-[var(--line)] pt-14 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t}>
              <span className="font-display text-[13px] font-semibold tabular-nums text-[var(--accent)]">
                0{i + 1}
              </span>
              <h3 className="font-display mt-4 text-[19px] font-semibold leading-tight tracking-tight text-[var(--ink)]">
                {v.t}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-soft)]">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto mt-28 w-full max-w-6xl px-6 sm:px-10">
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold tracking-tight text-[var(--ink)]">
          The people at the pass
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.name}>
              <ImageSlot ratio="3/4" label={p.name} hint="portrait — 3:4" rounded="rounded-2xl" />
              <h3 className="mt-4 text-[15px] font-medium text-[var(--ink)]">{p.name}</h3>
              <p className="mt-1 text-[12px] text-[var(--ink-soft)]">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-28 mb-24 w-full max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--crust)_5%,var(--card))] px-8 py-16 text-center">
          <h2 className="font-display max-w-lg text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
            Come and see how far a hot floor gets you
          </h2>
          <Link
            to="/menu"
            className="cursor-pointer rounded-full bg-[var(--accent)] px-8 py-4 text-[14px] font-semibold text-[var(--accent-ink)] transition hover:brightness-105 active:scale-[0.98]"
          >
            See the menu
          </Link>
        </div>
      </section>
    </main>
  )
}
