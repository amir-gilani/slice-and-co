import { useState } from 'react'
import ImageSlot from '../components/ImageSlot'
import PageHeader from '../components/PageHeader'

const locations = [
  {
    name: 'Old Town',
    address: '14 Market Row',
    hours: 'Mon–Sun · 11:00 — late',
    phone: '+1 (555) 014 220',
  },
  {
    name: 'Riverside',
    address: '2 Wharf Lane',
    hours: 'Tue–Sun · 12:00 — 23:00',
    phone: '+1 (555) 014 221',
  },
  {
    name: 'Northgate',
    address: '88 Almond Street',
    hours: 'Wed–Sun · 12:00 — 22:30',
    phone: '+1 (555) 014 222',
  },
]

const faqs = [
  {
    q: 'Do you take bookings?',
    a: 'For six or more, yes — call the kitchen directly. Smaller than that, we keep the room walk-in so nobody waits on an empty table.',
  },
  {
    q: 'How far do you deliver?',
    a: 'Four miles from each kitchen. Put your postcode in at checkout and it will tell you which oven your order is coming from.',
  },
  {
    q: 'Can you do gluten-free?',
    a: 'We bake a separate gluten-free base, but the kitchen handles flour all day, so we cannot call it coeliac-safe.',
  },
  {
    q: 'Are you hiring?',
    a: 'Usually. Send a line about yourself to the address below and mention which kitchen you can get to.',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <main className="w-full flex-1">
      <PageHeader
        eyebrow="Say hello"
        title="Three kitchens, one phone"
        accent="number"
        lede="Questions about an order, a booking or a job go to the same place. Somebody at the pass will get back to you the same day."
      />

      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-24 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Form */}
        <div>
          <h2 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--ink-soft)]">
            Send a message
          </h2>

          <form onSubmit={onSubmit} className="mt-7 space-y-5">
            <Field label="Your name" id="name" placeholder="Jamie Rivera" />
            <Field label="Email" id="email" type="email" placeholder="you@example.com" />
            <Field label="Subject" id="subject" placeholder="A table for eight on Friday" />

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ink-soft)]"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us what you need."
                className="mt-2 w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition placeholder:text-[color-mix(in_srgb,var(--ink-soft)_55%,transparent)] focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-[var(--accent)] px-6 py-4 text-[14px] font-semibold text-[var(--accent-ink)] transition hover:brightness-105 active:scale-[0.98] sm:w-auto sm:px-10"
            >
              {sent ? 'Thanks — we have it' : 'Send message'}
            </button>
          </form>

          <div className="mt-10 border-t border-[var(--line)] pt-8">
            <p className="text-[13px] text-[var(--ink-soft)]">
              Prefer email?{' '}
              <a
                href="mailto:hello@sliceandco.test"
                className="text-[var(--ink)] underline underline-offset-4 transition hover:text-[var(--accent)]"
              >
                hello@sliceandco.test
              </a>
            </p>
            <p className="mt-2 text-[13px] text-[var(--ink-soft)]">
              Press and partnerships:{' '}
              <a
                href="mailto:press@sliceandco.test"
                className="text-[var(--ink)] underline underline-offset-4 transition hover:text-[var(--accent)]"
              >
                press@sliceandco.test
              </a>
            </p>
          </div>
        </div>

        {/* Map + locations */}
        <div>
          <ImageSlot ratio="16/10" label="Map" hint="map screenshot — 16:10" rounded="rounded-3xl" />

          <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {locations.map((l) => (
              <li key={l.name} className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-5">
                <h3 className="font-display w-28 text-[17px] font-semibold tracking-tight text-[var(--ink)]">
                  {l.name}
                </h3>
                <div className="flex-1">
                  <p className="text-[13px] text-[var(--ink)]">{l.address}</p>
                  <p className="mt-1 text-[12px] text-[var(--ink-soft)]">{l.hours}</p>
                </div>
                <a
                  href={`tel:${l.phone.replace(/[^\d+]/g, '')}`}
                  className="text-[13px] tabular-nums text-[var(--ink-soft)] transition hover:text-[var(--accent)]"
                >
                  {l.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
          <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold tracking-tight text-[var(--ink)]">
            Before you ask
          </h2>

          <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[15px] font-semibold text-[var(--ink)]">{f.q}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--ink-soft)]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({ label, id, type = 'text', placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ink-soft)]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[14px] text-[var(--ink)] outline-none transition placeholder:text-[color-mix(in_srgb,var(--ink-soft)_55%,transparent)] focus:border-[var(--accent)]"
      />
    </div>
  )
}
