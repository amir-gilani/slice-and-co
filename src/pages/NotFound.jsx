import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <main className="w-full flex-1">
      <PageHeader
        eyebrow="404"
        title="That page came out of the oven"
        accent="burnt"
        lede="The link you followed does not lead anywhere on this site. The menu is the safest place to start again."
      />
      <div className="mx-auto w-full max-w-6xl px-6 pb-32 sm:px-10">
        <Link
          to="/menu"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-[14px] font-semibold text-[var(--accent-ink)] transition hover:brightness-105 active:scale-[0.98]"
        >
          Back to the menu
        </Link>
      </div>
    </main>
  )
}
