import { Link } from 'react-router-dom'
import { categoryOf, findItem, reviewCount, reviews } from '../data'

/**
 * The reviews block on the home page.
 *
 * Each review names the item it is about, which does two jobs: it proves the
 * counter is more than pizza now, and it gives the section somewhere to send
 * people — every card ends in a link to the thing being praised. The card
 * borrows that item's section tint, so the block is coloured by what people
 * actually ordered rather than by a decorative palette.
 */
export default function Reviews() {
  const average = reviews.reduce((n, r) => n + r.stars, 0) / reviews.length

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-28 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-8">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--ink-soft)]">
            From the queue
          </span>
          <h2 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold leading-tight tracking-tight text-[var(--ink)]">
            What the queue says
          </h2>
        </div>

        <div className="flex items-center gap-4 border-l border-[var(--line)] pl-6">
          <span className="font-display text-[clamp(2.2rem,5vw,3rem)] font-semibold leading-none tabular-nums text-[var(--ink)]">
            {average.toFixed(1)}
          </span>
          <div>
            <Stars value={average} />
            <p className="mt-1.5 text-[12px] tabular-nums text-[var(--ink-soft)]">
              {reviewCount} reviews · last 12 months
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <ReviewCard key={r.name} review={r} index={i} />
        ))}
      </div>
    </section>
  )
}

function ReviewCard({ review, index }) {
  const item = findItem(review.item)
  const cat = categoryOf(item?.category)

  return (
    <figure
      className="review-card reveal"
      style={{ '--tint': cat?.tint, '--i': index }}
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="review-avatar">
          {initials(review.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-medium text-[var(--ink)]">
            {review.name}
          </span>
          <span className="block truncate text-[11px] text-[var(--ink-soft)]">{review.meta}</span>
        </span>
        <Stars value={review.stars} />
      </div>

      <blockquote className="font-display mt-5 text-[17px] leading-snug tracking-tight text-[var(--ink)]">
        “{review.quote}”
      </blockquote>

      {item && (
        <figcaption className="mt-auto pt-6">
          <Link to={`/menu/${item.id}`} className="section-chip is-link">
            <span aria-hidden="true">{cat?.icon}</span>
            {item.name}
          </Link>
        </figcaption>
      )}
    </figure>
  )
}

/**
 * Five glyphs in the muted colour with the same five clipped over them in the
 * accent — which is what lets the summary show 4.7 as four and two-thirds
 * stars instead of rounding it into a lie.
 */
function Stars({ value }) {
  return (
    <span
      className="stars"
      style={{ '--fill': `${(value / 5) * 100}%` }}
      role="img"
      aria-label={`${value.toFixed(1)} out of 5`}
    >
      <span aria-hidden="true">★★★★★</span>
      <span aria-hidden="true" className="stars-fill">
        ★★★★★
      </span>
    </span>
  )
}

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .replace(/\./g, '')
    .slice(0, 2)
