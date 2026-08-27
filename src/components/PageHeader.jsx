/**
 * The masthead every inner page opens with: eyebrow, a serif title whose last
 * word carries the accent, and an optional lede. Keeping it in one component is
 * what makes the pages read as one site.
 */
export default function PageHeader({ eyebrow, title, accent, lede, children }) {
  return (
    <header className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14 sm:px-10 sm:pt-20">
      {eyebrow && (
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
          {eyebrow}
        </span>
      )}

      <h1 className="font-display mt-5 max-w-3xl text-[clamp(2.2rem,5.5vw,3.8rem)] font-semibold leading-[1.03] tracking-tight text-[var(--ink)]">
        {title} {accent && <em className="italic text-[var(--accent)]">{accent}</em>}
      </h1>

      {lede && (
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--ink-soft)]">{lede}</p>
      )}

      {children}

      <div aria-hidden="true" className="mt-12 h-px w-full bg-[var(--line)]" />
    </header>
  )
}
