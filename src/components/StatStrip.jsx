const stats = [
  { n: '48h', l: 'Dough ferment' },
  { n: '450°', l: 'Oven floor' },
  { n: '90s', l: 'Bake time' },
  { n: '2014', l: 'First kitchen' },
]

/** The four numbers that tell the whole method. Shared by home and about. */
export default function StatStrip() {
  return (
    <dl className="grid grid-cols-2 gap-y-10 border-y border-[var(--line)] py-10 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.l} className="text-center">
          <dt className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tabular-nums leading-none text-[var(--ink)]">
            {s.n}
          </dt>
          <dd className="mt-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--ink-soft)]">
            {s.l}
          </dd>
        </div>
      ))}
    </dl>
  )
}
