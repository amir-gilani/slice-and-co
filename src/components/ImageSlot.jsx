/**
 * A placeholder standing in for a photo that hasn't been dropped in yet.
 *
 * To fill one: drop the file into src/assets, import it, and pass it as `src` —
 * the slot renders the photo in the same frame at the same aspect ratio, so
 * nothing on the page shifts.
 *
 *   import margherita from '../assets/margherita.webp'
 *   <ImageSlot src={margherita} alt="Margherita" ratio="4/3" />
 *
 * `fit` decides how the photo sits in the frame. Cut-outs on a transparent
 * background — like the pies — want "contain", so the whole shape stays
 * visible; edge-to-edge photography wants the default "cover".
 */
export default function ImageSlot({
  src,
  alt = '',
  ratio = '4/3',
  fit = 'cover',
  label = 'Image',
  hint,
  rounded = 'rounded-2xl',
  className = '',
}) {
  const frame = `relative overflow-hidden ${rounded} ${className}`

  if (src) {
    const contain = fit === 'contain'
    return (
      <div
        className={`${frame} ${contain ? 'bg-[color-mix(in_srgb,var(--crust)_7%,var(--card))] p-3' : ''}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt}
          draggable="false"
          className={`size-full ${contain ? 'object-contain' : 'object-cover'}`}
        />
      </div>
    )
  }

  return (
    <div
      className={`${frame} image-slot grid place-items-center border border-[var(--line)] bg-[color-mix(in_srgb,var(--crust)_6%,var(--card))]`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[var(--ink-soft)] opacity-45">
          <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8.75" cy="9.75" r="1.6" stroke="currentColor" strokeWidth="1.4" />
          <path d="m4.5 17 4.2-4.2a1.8 1.8 0 0 1 2.5 0l2 2 1.6-1.5a1.8 1.8 0 0 1 2.5 0l4.2 4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--ink-soft)] opacity-70">
          {label}
        </span>
        {hint && <span className="text-[11px] text-[var(--ink-soft)] opacity-50">{hint}</span>}
      </div>
    </div>
  )
}
