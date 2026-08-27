/**
 * The frame a menu photo sits in — and what stands there until one exists.
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
 *
 * With no `src`, the slot draws its section's emoji on a wash of that
 * section's tint (see `categories` in data.js). That is deliberate: a menu
 * three-quarters full of grey "no image" boxes reads as broken, whereas a
 * board of tinted glyphs reads as a house style — and the tint is doing real
 * work, telling burgers from drinks at a glance while you scroll.
 */
export default function ImageSlot({
  src,
  alt = '',
  ratio = '4/3',
  fit = 'cover',
  label = 'Image',
  icon,
  tint,
  rounded = 'rounded-2xl',
  className = '',
}) {
  const frame = `relative overflow-hidden ${rounded} ${className}`
  // Falls back to the crust gold, so a slot with no section still looks placed.
  const style = { aspectRatio: ratio, '--tint': tint || 'var(--crust)' }

  if (src) {
    const contain = fit === 'contain'
    return (
      <div className={`${frame} ${contain ? 'image-frame' : ''}`} style={style}>
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
      className={`${frame} image-slot grid place-items-center`}
      style={style}
      role="img"
      aria-label={alt || label}
    >
      <span aria-hidden="true" className="image-slot-glyph select-none">
        {icon || '🍽️'}
      </span>
    </div>
  )
}
