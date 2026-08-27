import PizzaSlider from '../components/PizzaSlider'
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

export default function Home() {
  return (
    <main className="relative flex w-full flex-1 flex-col items-center overflow-hidden px-4 pt-6 text-center sm:px-10">
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
    </main>
  )
}
