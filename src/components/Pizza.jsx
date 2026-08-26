export default function Pizza({ pizza, className = '', ref }) {
  return (
    <div ref={ref} className={`pizza ${className}`.trim()} aria-hidden="true">
      {pizza.toppings.map((t, i) => (
        <span
          key={i}
          className="topping"
          style={{ left: `${t.x}%`, top: `${t.y}%`, '--rot': `${t.rot}deg` }}
        >
          {t.emoji}
        </span>
      ))}
    </div>
  )
}
