import hawaiian from './assets/hawaiian.png'
import pepperoni from './assets/pepperoni.png'
import supreme from './assets/supreme.png'
import veggie from './assets/veggie.png'

// Photographed pies, shot top-down on a transparent background so they sit
// flat on the white stage. Each is cropped in half by `.pizza-crop`.
export const pizzas = [
  {
    id: 'pepperoni',
    name: 'Pepperoni Classic',
    blurb: 'Double pepperoni, torn basil, blistered cherry tomato.',
    size: '12"',
    slices: '8 slices',
    price: '$16',
    image: pepperoni,
  },
  {
    id: 'veggie',
    name: 'Garden Veggie',
    blurb: 'Black olive, green pepper, mushroom, vine tomato.',
    size: '12"',
    slices: '8 slices',
    price: '$15',
    image: veggie,
  },
  {
    id: 'hawaiian',
    name: 'Sweet Hawaiian',
    blurb: 'Golden pineapple, smoked ham, stretched mozzarella.',
    size: '12"',
    slices: '10 slices',
    price: '$15',
    image: hawaiian,
  },
  {
    id: 'supreme',
    name: 'Supreme Deluxe',
    blurb: 'Pepperoni, sausage, olive, red onion, sweet pepper.',
    size: '14"',
    slices: '8 slices',
    price: '$19',
    image: supreme,
  },
]
