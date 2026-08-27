import hawaiian from './assets/hawaiian.webp'
import pepperoni from './assets/pepperoni.webp'
import supreme from './assets/supreme.webp'
import veggie from './assets/veggie.webp'

/**
 * The four pies with photography. These drive the hero slider, so they always
 * carry an `image`.
 */
export const pizzas = [
  {
    id: 'pepperoni',
    name: 'Pepperoni Classic',
    blurb: 'Double pepperoni, torn basil, blistered cherry tomato.',
    size: '12"',
    slices: '8 slices',
    price: 16,
    image: pepperoni,
  },
  {
    id: 'veggie',
    name: 'Garden Veggie',
    blurb: 'Black olive, green pepper, mushroom, vine tomato.',
    size: '12"',
    slices: '8 slices',
    price: 15,
    image: veggie,
  },
  {
    id: 'hawaiian',
    name: 'Sweet Hawaiian',
    blurb: 'Golden pineapple, smoked ham, stretched mozzarella.',
    size: '12"',
    slices: '10 slices',
    price: 15,
    image: hawaiian,
  },
  {
    id: 'supreme',
    name: 'Supreme Deluxe',
    blurb: 'Pepperoni, sausage, olive, red onion, sweet pepper.',
    size: '14"',
    slices: '8 slices',
    price: 19,
    image: supreme,
  },
]

/**
 * The full menu.
 *
 * Items without an `image` render an ImageSlot placeholder at the right shape.
 * To fill one: drop a photo into src/assets, import it at the top of this file
 * and set it as the item's `image` — nothing else needs to change.
 */
export const categories = ['Classics', 'Signature', 'Veggie', 'Sides', 'Drinks']

export const menu = [
  {
    id: 'pepperoni',
    name: 'Pepperoni Classic',
    category: 'Classics',
    price: 16,
    kcal: 285,
    time: '12 min',
    image: pepperoni,
    blurb: 'Double pepperoni, torn basil, blistered cherry tomato.',
    description:
      'Two layers of aged pepperoni over fior di latte and San Marzano, finished with basil torn by hand as it leaves the oven. The cups char at the edges and hold a little pool of spiced oil — the reason this one outsells everything else on the board.',
    ingredients: ['San Marzano', 'Fior di latte', 'Aged pepperoni', 'Basil', 'Cherry tomato'],
    tags: ['Bestseller'],
  },
  {
    id: 'veggie',
    name: 'Garden Veggie',
    category: 'Veggie',
    price: 15,
    kcal: 240,
    time: '12 min',
    image: veggie,
    blurb: 'Black olive, green pepper, mushroom, vine tomato.',
    description:
      'Everything from the market bench, cut thin so it cooks through in ninety seconds. Black olive and green pepper for bite, chestnut mushroom for depth, vine tomato laid on last so it keeps its shape.',
    ingredients: ['San Marzano', 'Fior di latte', 'Black olive', 'Green pepper', 'Mushroom'],
    tags: ['Vegetarian'],
  },
  {
    id: 'hawaiian',
    name: 'Sweet Hawaiian',
    category: 'Classics',
    price: 15,
    kcal: 260,
    time: '11 min',
    image: hawaiian,
    blurb: 'Golden pineapple, smoked ham, stretched mozzarella.',
    description:
      'The argument that refuses to end. Pineapple roasted first so it caramelises instead of steaming, smoked ham off the bone, and enough mozzarella to pull properly.',
    ingredients: ['San Marzano', 'Mozzarella', 'Roasted pineapple', 'Smoked ham'],
    tags: ['Sweet'],
  },
  {
    id: 'supreme',
    name: 'Supreme Deluxe',
    category: 'Signature',
    price: 19,
    kcal: 310,
    time: '14 min',
    image: supreme,
    blurb: 'Pepperoni, sausage, olive, red onion, sweet pepper.',
    description:
      'The whole counter on one base: pepperoni, fennel sausage, black olive, red onion and sweet pepper. Built heavy, baked hot, and cut into eight so it holds together on the way to the table.',
    ingredients: ['San Marzano', 'Fior di latte', 'Pepperoni', 'Fennel sausage', 'Red onion'],
    tags: ['Loaded'],
  },
  {
    id: 'margherita',
    name: 'Margherita',
    category: 'Classics',
    price: 13,
    kcal: 220,
    time: '10 min',
    blurb: 'San Marzano, fior di latte, basil, olive oil.',
    description:
      'Four ingredients with nowhere to hide. Tomatoes crushed by hand that morning, mozzarella torn rather than sliced, basil and a thread of oil after the bake.',
    ingredients: ['San Marzano', 'Fior di latte', 'Basil', 'Olive oil'],
    tags: ['Vegetarian', 'Classic'],
  },
  {
    id: 'diavola',
    name: 'Diavola',
    category: 'Signature',
    price: 17,
    kcal: 295,
    time: '12 min',
    blurb: 'Nduja, chilli honey, red onion, oregano.',
    description:
      'Calabrian nduja that melts into the sauce, cut with a drizzle of chilli honey once it is out of the oven. Hot, but the sweetness keeps it civil.',
    ingredients: ['San Marzano', 'Fior di latte', 'Nduja', 'Chilli honey', 'Red onion'],
    tags: ['Hot'],
  },
  {
    id: 'quattro',
    name: 'Quattro Formaggi',
    category: 'Signature',
    price: 18,
    kcal: 330,
    time: '11 min',
    blurb: 'Mozzarella, gorgonzola, pecorino, taleggio.',
    description:
      'No tomato — a white base of four cheeses, each doing a different job. Taleggio for the melt, gorgonzola for the edge, pecorino for salt, mozzarella to hold it together.',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Pecorino', 'Taleggio', 'Black pepper'],
    tags: ['Vegetarian', 'Rich'],
  },
  {
    id: 'funghi',
    name: 'Truffle Funghi',
    category: 'Veggie',
    price: 18,
    kcal: 275,
    time: '13 min',
    blurb: 'Wild mushroom, taleggio, thyme, truffle oil.',
    description:
      'Wild mushrooms roasted separately so they colour instead of sweat, over taleggio and thyme, with truffle oil brushed on at the pass.',
    ingredients: ['Taleggio', 'Wild mushroom', 'Thyme', 'Truffle oil', 'Garlic'],
    tags: ['Vegetarian', 'Seasonal'],
  },
  {
    id: 'garlic-bread',
    name: 'Garlic Dough Sticks',
    category: 'Sides',
    price: 6,
    kcal: 180,
    time: '8 min',
    blurb: 'Same dough, garlic butter, sea salt.',
    description:
      'Offcuts of the same 48-hour dough, baked in the pizza oven and brushed with garlic butter as they come out.',
    ingredients: ['48-hour dough', 'Garlic butter', 'Sea salt', 'Parsley'],
    tags: ['Sharing'],
  },
  {
    id: 'burrata',
    name: 'Burrata & Tomato',
    category: 'Sides',
    price: 9,
    kcal: 210,
    time: '5 min',
    blurb: 'Whole burrata, heritage tomato, basil oil.',
    description:
      'A whole burrata on heritage tomatoes with basil oil and cracked pepper. Cold, and meant to arrive before the pizza does.',
    ingredients: ['Burrata', 'Heritage tomato', 'Basil oil', 'Black pepper'],
    tags: ['Vegetarian', 'Cold'],
  },
  {
    id: 'wings',
    name: 'Chilli Honey Wings',
    category: 'Sides',
    price: 8,
    kcal: 320,
    time: '14 min',
    blurb: 'Oven-roasted, chilli honey, lime.',
    description:
      'Roasted hard in the deck oven until the skin goes glassy, then tossed in the same chilli honey that finishes the Diavola.',
    ingredients: ['Chicken wings', 'Chilli honey', 'Lime', 'Sea salt'],
    tags: ['Hot'],
  },
  {
    id: 'lemonade',
    name: 'Sicilian Lemonade',
    category: 'Drinks',
    price: 4,
    kcal: 90,
    time: '2 min',
    blurb: 'Pressed lemon, mint, soda.',
    description: 'Lemons pressed each morning, mint bruised to order, topped with soda over ice.',
    ingredients: ['Sicilian lemon', 'Mint', 'Cane sugar', 'Soda'],
    tags: ['Cold'],
  },
  {
    id: 'chinotto',
    name: 'Chinotto',
    category: 'Drinks',
    price: 4,
    kcal: 70,
    time: '1 min',
    blurb: 'Bitter orange, glass bottle, very cold.',
    description: 'The bitter one. Served in the bottle, straight from the bottom of the fridge.',
    ingredients: ['Chinotto orange', 'Cane sugar'],
    tags: ['Bitter'],
  },
]

export const findItem = (id) => menu.find((m) => m.id === id)
