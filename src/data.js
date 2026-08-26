// Six toppings per pizza, laid out on a regular hexagon around the centre,
// alternating between the pizza's two topping emoji.
const hexagon = (emojiA, emojiB, radius = 27) =>
  Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 * Math.PI) / 180
    return {
      emoji: i % 2 === 0 ? emojiA : emojiB,
      x: 50 + radius * Math.cos(angle),
      y: 50 - radius * Math.sin(angle),
      rot: i * 24 - 60,
    }
  })

export const pizzas = [
  {
    id: 'margherita',
    name: 'Margherita Classic',
    blurb: 'San Marzano, fior di latte, torn basil.',
    size: '12\"',
    slices: '6 slices',
    price: '$14',
    toppings: hexagon('🌿', '🍅'),
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni Supreme',
    blurb: 'Double pepperoni, chilli honey, oregano.',
    size: '14\"',
    slices: '6 slices',
    price: '$17',
    toppings: hexagon('🍖', '🌶️'),
  },
  {
    id: 'veggie',
    name: 'Garden Veggie',
    blurb: 'Mushroom, olive, roasted pepper, rocket.',
    size: '12\"',
    slices: '6 slices',
    price: '$15',
    toppings: hexagon('🍄', '🫒'),
  },
]
