export default function Pizza({ pizza, className = '', ref }) {
  return (
    <div ref={ref} className={`pizza ${className}`.trim()}>
      <img src={pizza.image} alt={pizza.name} draggable="false" />
    </div>
  )
}
