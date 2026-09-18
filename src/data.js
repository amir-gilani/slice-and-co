import burrata from './assets/burrata.webp'
import chickenBurger from './assets/chicken-burger.webp'
import chickenShawarma from './assets/chicken-shawarma.webp'
import chinotto from './assets/chinotto.webp'
import craftCola from './assets/craft-cola.webp'
import diavola from './assets/diavola.webp'
import dipTrio from './assets/dip-trio.webp'
import doubleSmash from './assets/double-smash.webp'
import espresso from './assets/espresso.webp'
import falafelPlate from './assets/falafel-plate.webp'
import falafelWrap from './assets/falafel-wrap.webp'
import fries from './assets/fries.webp'
import funghi from './assets/funghi.webp'
import garlicBread from './assets/garlic-bread.webp'
import gelato from './assets/gelato.webp'
import gemCaesar from './assets/gem-caesar.webp'
import halloumiBurger from './assets/halloumi-burger.webp'
import halloumiWrap from './assets/halloumi-wrap.webp'
import hawaiian from './assets/hawaiian.webp'
import hummus from './assets/hummus.webp'
import lemonade from './assets/lemonade.webp'
import loadedFries from './assets/loaded-fries.webp'
import margherita from './assets/margherita.webp'
import mintYoghurt from './assets/mint-yoghurt.webp'
import mozzarellaSticks from './assets/mozzarella-sticks.webp'
import nutellaBites from './assets/nutella-bites.webp'
import olives from './assets/olives.webp'
import onionRings from './assets/onion-rings.webp'
import peachTea from './assets/peach-tea.webp'
import pepperoni from './assets/pepperoni.webp'
import popcornChicken from './assets/popcorn-chicken.webp'
import quattro from './assets/quattro.webp'
import slaw from './assets/slaw.webp'
import smashClassic from './assets/smash-classic.webp'
import supreme from './assets/supreme.webp'
import tabbouleh from './assets/tabbouleh.webp'
import tiramisu from './assets/tiramisu.webp'
import veggie from './assets/veggie.webp'
import wings from './assets/wings.webp'

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
 * The counter, split into the sections people actually order from.
 *
 * `icon` and `tint` are a section's visual signature: the emoji stands in for
 * photography that hasn't been shot yet (see ImageSlot) and the tint washes
 * the chips, placeholders and rules, so a burger card never reads like a
 * drinks card. Tints stay inside the warm, earthy family the accent lives in —
 * nothing here should out-shout --accent.
 */
export const categories = [
  {
    id: 'pizza',
    label: 'Pizza',
    icon: '🍕',
    tint: '#e0432c',
    tagline: 'Forty-eight hours of dough, ninety seconds of fire.',
  },
  {
    id: 'burgers',
    label: 'Burgers',
    icon: '🍔',
    tint: '#b5562b',
    tagline: 'Smashed thin on the flat top, cheese welded on.',
  },
  {
    id: 'fried',
    label: 'Fried',
    icon: '🍟',
    tint: '#d1922f',
    tagline: 'Out of the fryer, salted, on the table in four minutes.',
  },
  {
    id: 'falafel',
    label: 'Falafel & Wraps',
    short: 'Falafel',
    icon: '🥙',
    tint: '#7f9440',
    tagline: 'Chickpeas soaked overnight, rolled and fried to order.',
  },
  {
    id: 'cold',
    label: 'Cold Plates',
    short: 'Cold',
    icon: '🥗',
    tint: '#3f9179',
    tagline: 'Fridge-cold starters, meant to land before the hot food.',
  },
  {
    id: 'sides',
    label: 'Sides',
    icon: '🧄',
    tint: '#b8834c',
    tagline: 'Small things that fill the gaps on the table.',
  },
  {
    id: 'drinks',
    label: 'Drinks',
    icon: '🥤',
    tint: '#3f7c9e',
    tagline: 'Pressed, poured, or straight out of the bottle fridge.',
  },
  {
    id: 'sweets',
    label: 'Sweets',
    icon: '🍮',
    tint: '#b26385',
    tagline: 'One more thing before the bill.',
  },
]

export const categoryOf = (id) => categories.find((c) => c.id === id)
export const categoryLabel = (id) => categoryOf(id)?.label ?? id

/**
 * The full menu.
 *
 * Items without an `image` render an ImageSlot placeholder carrying their
 * section's emoji and tint. To fill one: drop a photo into src/assets, import
 * it at the top of this file and set it as the item's `image` — nothing else
 * needs to change.
 */
export const menu = [
  /* ---------------------------------------------------------------- pizza */
  {
    id: 'pepperoni',
    name: 'Pepperoni Classic',
    category: 'pizza',
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
    category: 'pizza',
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
    category: 'pizza',
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
    category: 'pizza',
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
    category: 'pizza',
    price: 13,
    kcal: 220,
    time: '10 min',
    image: margherita,
    blurb: 'San Marzano, fior di latte, basil, olive oil.',
    description:
      'Four ingredients with nowhere to hide. Tomatoes crushed by hand that morning, mozzarella torn rather than sliced, basil and a thread of oil after the bake.',
    ingredients: ['San Marzano', 'Fior di latte', 'Basil', 'Olive oil'],
    tags: ['Vegetarian', 'Classic'],
  },
  {
    id: 'diavola',
    name: 'Diavola',
    category: 'pizza',
    price: 17,
    kcal: 295,
    time: '12 min',
    image: diavola,
    blurb: 'Nduja, chilli honey, red onion, oregano.',
    description:
      'Calabrian nduja that melts into the sauce, cut with a drizzle of chilli honey once it is out of the oven. Hot, but the sweetness keeps it civil.',
    ingredients: ['San Marzano', 'Fior di latte', 'Nduja', 'Chilli honey', 'Red onion'],
    tags: ['Hot'],
  },
  {
    id: 'quattro',
    name: 'Quattro Formaggi',
    category: 'pizza',
    price: 18,
    kcal: 330,
    time: '11 min',
    image: quattro,
    blurb: 'Mozzarella, gorgonzola, pecorino, taleggio.',
    description:
      'No tomato — a white base of four cheeses, each doing a different job. Taleggio for the melt, gorgonzola for the edge, pecorino for salt, mozzarella to hold it together.',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Pecorino', 'Taleggio', 'Black pepper'],
    tags: ['Vegetarian', 'Rich'],
  },
  {
    id: 'funghi',
    name: 'Truffle Funghi',
    category: 'pizza',
    price: 18,
    kcal: 275,
    time: '13 min',
    image: funghi,
    blurb: 'Wild mushroom, taleggio, thyme, truffle oil.',
    description:
      'Wild mushrooms roasted separately so they colour instead of sweat, over taleggio and thyme, with truffle oil brushed on at the pass.',
    ingredients: ['Taleggio', 'Wild mushroom', 'Thyme', 'Truffle oil', 'Garlic'],
    tags: ['Vegetarian', 'Seasonal'],
  },

  /* -------------------------------------------------------------- burgers */
  {
    id: 'smash-classic',
    name: 'Smash Classic',
    category: 'burgers',
    price: 12,
    kcal: 620,
    time: '9 min',
    image: smashClassic,
    blurb: 'Single smashed patty, American cheese, pickle, house sauce.',
    description:
      'Ninety grams of chuck and brisket pressed flat on a screaming flat top, so the whole underside turns to crust. Cheese goes on while it is still moving, then pickles, house sauce, and a potato bun that gives up immediately.',
    ingredients: ['Chuck & brisket', 'American cheese', 'Dill pickle', 'House sauce', 'Potato bun'],
    tags: ['Bestseller'],
  },
  {
    id: 'double-smash',
    name: 'Double Smash Stack',
    category: 'burgers',
    price: 16,
    kcal: 910,
    time: '10 min',
    image: doubleSmash,
    blurb: 'Two patties, double cheese, caramelised onion.',
    description:
      'The Classic with the volume up: two patties with two slices of cheese between them so the middle fuses, and onions cooked down in the beef fat until they are nearly jam.',
    ingredients: ['Chuck & brisket', 'American cheese', 'Caramelised onion', 'House sauce'],
    tags: ['Loaded'],
  },
  {
    id: 'chicken-burger',
    name: 'Buttermilk Chicken',
    category: 'burgers',
    price: 13,
    kcal: 740,
    time: '12 min',
    image: chickenBurger,
    blurb: 'Overnight buttermilk thigh, slaw, pickled chilli.',
    description:
      'Boned thigh sat in buttermilk overnight, dredged twice and fried until the coating shatters. Cold slaw underneath to keep it from turning heavy, pickled green chilli over the top.',
    ingredients: ['Chicken thigh', 'Buttermilk', 'Buttermilk slaw', 'Pickled chilli', 'Brioche bun'],
    tags: ['Crispy'],
  },
  {
    id: 'halloumi-burger',
    name: 'Halloumi & Harissa',
    category: 'burgers',
    price: 12,
    kcal: 580,
    time: '9 min',
    image: halloumiBurger,
    blurb: 'Griddled halloumi, rose harissa, mint yoghurt.',
    description:
      'Thick-cut halloumi griddled until it squeaks and blisters, rose harissa for the heat, mint yoghurt to put it out again. The vegetarian one nobody orders reluctantly.',
    ingredients: ['Halloumi', 'Rose harissa', 'Mint yoghurt', 'Little gem', 'Potato bun'],
    tags: ['Vegetarian', 'Hot'],
  },

  /* ---------------------------------------------------------------- fried */
  {
    id: 'fries',
    name: 'Rosemary Fries',
    category: 'fried',
    price: 5,
    kcal: 380,
    time: '6 min',
    image: fries,
    blurb: 'Twice-fried, rosemary salt, skin on.',
    description:
      'Cut in the morning, blanched at 140 and finished at 180, so the outside goes glassy while the middle stays fluffy. Tossed in rosemary salt the second they come out.',
    ingredients: ['Maris Piper', 'Rosemary salt', 'Sunflower oil'],
    tags: ['Vegetarian'],
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Chilli Fries',
    category: 'fried',
    price: 8,
    kcal: 620,
    time: '8 min',
    image: loadedFries,
    blurb: 'Beef chilli, molten cheese, jalapeño, sour cream.',
    description:
      'A full portion of fries buried under beef chilli and cheese sauce, then pickled jalapeño and sour cream. It comes with a fork because it has to.',
    ingredients: ['Rosemary fries', 'Beef chilli', 'Cheese sauce', 'Jalapeño', 'Sour cream'],
    tags: ['Sharing', 'Hot'],
  },
  {
    id: 'onion-rings',
    name: 'Beer-Batter Onion Rings',
    category: 'fried',
    price: 6,
    kcal: 410,
    time: '7 min',
    image: onionRings,
    blurb: 'Thick-cut sweet onion, ice-cold batter.',
    description:
      'Sweet onion cut a centimetre thick and dropped through a batter kept ice-cold, which is the whole trick — the shock is what lifts the crust away from the ring.',
    ingredients: ['Sweet onion', 'Beer batter', 'Sea salt'],
    tags: ['Vegetarian', 'Sharing'],
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    category: 'fried',
    price: 7,
    kcal: 450,
    time: '7 min',
    image: mozzarellaSticks,
    blurb: 'Panko crust, low-moisture mozzarella, marinara.',
    description:
      'Breaded twice and frozen hard before they go in, so the crust sets before the cheese surrenders. Marinara on the side, from the same tomatoes as the pizza sauce.',
    ingredients: ['Mozzarella', 'Panko', 'Oregano', 'Marinara'],
    tags: ['Vegetarian'],
  },
  {
    id: 'popcorn-chicken',
    name: 'Popcorn Chicken',
    category: 'fried',
    price: 7,
    kcal: 480,
    time: '8 min',
    image: popcornChicken,
    blurb: 'Thigh nuggets, cajun dust, garlic mayo.',
    description:
      'Thigh rather than breast, cut small and craggy so there is more surface to crisp. Dusted with cajun as it drains, garlic mayo to dip.',
    ingredients: ['Chicken thigh', 'Cajun spice', 'Buttermilk', 'Garlic mayo'],
    tags: ['Bestseller'],
  },
  {
    id: 'wings',
    name: 'Chilli Honey Wings',
    category: 'fried',
    price: 8,
    kcal: 320,
    time: '14 min',
    image: wings,
    blurb: 'Oven-roasted, chilli honey, lime.',
    description:
      'Roasted hard in the deck oven until the skin goes glassy, then tossed in the same chilli honey that finishes the Diavola.',
    ingredients: ['Chicken wings', 'Chilli honey', 'Lime', 'Sea salt'],
    tags: ['Hot'],
  },

  /* -------------------------------------------------------------- falafel */
  {
    id: 'falafel-wrap',
    name: 'Falafel Wrap',
    category: 'falafel',
    price: 9,
    kcal: 540,
    time: '8 min',
    image: falafelWrap,
    blurb: 'Six falafel, tahini, pickled turnip, herbs.',
    description:
      'Chickpeas soaked overnight and never boiled — that is the difference between a falafel that stays light and one that goes to paste. Rolled to order, fried dark, wrapped hot with tahini and enough herbs to count as a salad.',
    ingredients: ['Chickpea', 'Parsley & coriander', 'Tahini', 'Pickled turnip', 'Flatbread'],
    tags: ['Vegan', 'Bestseller'],
  },
  {
    id: 'falafel-plate',
    name: 'Falafel Plate',
    category: 'falafel',
    price: 11,
    kcal: 610,
    time: '10 min',
    image: falafelPlate,
    blurb: 'Eight falafel, hummus, salad, warm pita.',
    description:
      'The wrap taken apart and laid out properly: eight falafel around a pool of hummus, chopped salad, pickles, and pita warmed on the pizza deck.',
    ingredients: ['Chickpea', 'Hummus', 'Chopped salad', 'Pickles', 'Pita'],
    tags: ['Vegan', 'Sharing'],
  },
  {
    id: 'halloumi-wrap',
    name: 'Halloumi Wrap',
    category: 'falafel',
    price: 10,
    kcal: 570,
    time: '8 min',
    image: halloumiWrap,
    blurb: 'Griddled halloumi, zhoug, tomato, mint.',
    description:
      'Halloumi off the griddle while it is still squeaking, green zhoug down the middle, tomato and mint to keep it fresh. Salty, sharp, gone in four bites.',
    ingredients: ['Halloumi', 'Zhoug', 'Tomato', 'Mint', 'Flatbread'],
    tags: ['Vegetarian'],
  },
  {
    id: 'chicken-shawarma',
    name: 'Spiced Chicken Wrap',
    category: 'falafel',
    price: 11,
    kcal: 650,
    time: '9 min',
    image: chickenShawarma,
    blurb: 'Marinated thigh, garlic sauce, chilli, fries inside.',
    description:
      'Thigh marinated a day in seven spices, carved off the vertical grill and wrapped with garlic sauce, chilli, and — because that is how it should be — a few fries tucked in with it.',
    ingredients: ['Chicken thigh', 'Seven spice', 'Garlic sauce', 'Chilli', 'Flatbread'],
    tags: ['Hot'],
  },

  /* ---------------------------------------------------------- cold plates */
  {
    id: 'burrata',
    name: 'Burrata & Tomato',
    category: 'cold',
    price: 9,
    kcal: 210,
    time: '5 min',
    image: burrata,
    blurb: 'Whole burrata, heritage tomato, basil oil.',
    description:
      'A whole burrata on heritage tomatoes with basil oil and cracked pepper. Cold, and meant to arrive before the pizza does.',
    ingredients: ['Burrata', 'Heritage tomato', 'Basil oil', 'Black pepper'],
    tags: ['Vegetarian', 'Cold'],
  },
  {
    id: 'hummus',
    name: 'Hummus & Warm Pita',
    category: 'cold',
    price: 6,
    kcal: 290,
    time: '4 min',
    image: hummus,
    blurb: 'Whipped chickpea, tahini, olive oil, sumac.',
    description:
      'Whipped long enough to go silky, pooled with green olive oil and dusted with sumac. The pita comes off the pizza deck, so it lands warm against the cold hummus.',
    ingredients: ['Chickpea', 'Tahini', 'Lemon', 'Olive oil', 'Sumac'],
    tags: ['Vegan', 'Cold'],
  },
  {
    id: 'tabbouleh',
    name: 'Tabbouleh',
    category: 'cold',
    price: 7,
    kcal: 180,
    time: '4 min',
    image: tabbouleh,
    blurb: 'More parsley than bulgur, lemon, tomato.',
    description:
      'Parsley first and bulgur second, the way it is supposed to be — chopped fine, and dressed only once it is ordered so it never sits and wilts.',
    ingredients: ['Flat parsley', 'Bulgur', 'Tomato', 'Lemon', 'Mint'],
    tags: ['Vegan', 'Cold'],
  },
  {
    id: 'gem-caesar',
    name: 'Little Gem Caesar',
    category: 'cold',
    price: 8,
    kcal: 260,
    time: '5 min',
    image: gemCaesar,
    blurb: 'Cold gem hearts, anchovy dressing, pecorino.',
    description:
      'Gem hearts kept on ice until they are dressed, so every leaf comes up cold and rigid. Anchovy dressing, pecorino shaved thin, croutons cut from yesterday’s dough.',
    ingredients: ['Little gem', 'Anchovy', 'Pecorino', 'Dough croutons'],
    tags: ['Cold'],
  },

  /* ---------------------------------------------------------------- sides */
  {
    id: 'garlic-bread',
    name: 'Garlic Dough Sticks',
    category: 'sides',
    price: 6,
    kcal: 180,
    time: '8 min',
    image: garlicBread,
    blurb: 'Same dough, garlic butter, sea salt.',
    description:
      'Offcuts of the same 48-hour dough, baked in the pizza oven and brushed with garlic butter as they come out.',
    ingredients: ['48-hour dough', 'Garlic butter', 'Sea salt', 'Parsley'],
    tags: ['Sharing', 'Vegetarian'],
  },
  {
    id: 'olives',
    name: 'Marinated Olives',
    category: 'sides',
    price: 4,
    kcal: 140,
    time: '2 min',
    image: olives,
    blurb: 'Nocellara, orange peel, fennel seed.',
    description:
      'Bright green Nocellara left a week in oil with orange peel, fennel seed and a bay leaf. Something to pick at while the oven does its work.',
    ingredients: ['Nocellara olive', 'Orange peel', 'Fennel seed', 'Bay'],
    tags: ['Vegan', 'Cold'],
  },
  {
    id: 'slaw',
    name: 'Buttermilk Slaw',
    category: 'sides',
    price: 4,
    kcal: 160,
    time: '3 min',
    image: slaw,
    blurb: 'White cabbage, buttermilk, celery seed.',
    description:
      'Cut thin on a mandolin and dressed late, so it stays crunchy. Celery seed does most of the talking.',
    ingredients: ['White cabbage', 'Carrot', 'Buttermilk', 'Celery seed'],
    tags: ['Vegetarian', 'Cold'],
  },
  {
    id: 'dip-trio',
    name: 'Dip Trio',
    category: 'sides',
    price: 5,
    kcal: 210,
    time: '2 min',
    image: dipTrio,
    blurb: 'Garlic mayo, chilli honey, blue cheese.',
    description:
      'The three that go with everything else on this board, in three little pots. Order it with the fries and stop pretending you will share.',
    ingredients: ['Garlic mayo', 'Chilli honey', 'Blue cheese'],
    tags: ['Sharing'],
  },

  /* --------------------------------------------------------------- drinks */
  {
    id: 'lemonade',
    name: 'Sicilian Lemonade',
    category: 'drinks',
    price: 4,
    kcal: 90,
    time: '2 min',
    image: lemonade,
    blurb: 'Pressed lemon, mint, soda.',
    description: 'Lemons pressed each morning, mint bruised to order, topped with soda over ice.',
    ingredients: ['Sicilian lemon', 'Mint', 'Cane sugar', 'Soda'],
    tags: ['Cold'],
  },
  {
    id: 'chinotto',
    name: 'Chinotto',
    category: 'drinks',
    price: 4,
    kcal: 70,
    time: '1 min',
    image: chinotto,
    blurb: 'Bitter orange, glass bottle, very cold.',
    description: 'The bitter one. Served in the bottle, straight from the bottom of the fridge.',
    ingredients: ['Chinotto orange', 'Cane sugar'],
    tags: ['Bitter'],
  },
  {
    id: 'craft-cola',
    name: 'Craft Cola',
    category: 'drinks',
    price: 4,
    kcal: 130,
    time: '1 min',
    image: craftCola,
    blurb: 'Cane sugar, real spice, glass bottle.',
    description:
      'Made forty miles away with cane sugar and actual cassia and citrus peel. Tastes like cola did before it was optimised.',
    ingredients: ['Cane sugar', 'Cassia', 'Citrus peel', 'Sparkling water'],
    tags: ['Cold'],
  },
  {
    id: 'mint-yoghurt',
    name: 'Mint Yoghurt Soda',
    category: 'drinks',
    price: 4,
    kcal: 110,
    time: '2 min',
    image: mintYoghurt,
    blurb: 'Salted yoghurt, dried mint, sparkling water.',
    description:
      'Salty, fizzy and faintly sour — the one thing that properly puts out the harissa burger or the spiced chicken wrap. Trust the kitchen on this.',
    ingredients: ['Yoghurt', 'Dried mint', 'Sea salt', 'Sparkling water'],
    tags: ['Cold'],
  },
  {
    id: 'peach-tea',
    name: 'Peach Iced Tea',
    category: 'drinks',
    price: 4,
    kcal: 80,
    time: '2 min',
    image: peachTea,
    blurb: 'Cold-brewed black tea, white peach, lemon.',
    description:
      'Black tea cold-brewed overnight so it never turns bitter, sweetened with white peach and sharpened with lemon.',
    ingredients: ['Black tea', 'White peach', 'Lemon', 'Cane sugar'],
    tags: ['Cold'],
  },
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'drinks',
    price: 3,
    kcal: 5,
    time: '1 min',
    image: espresso,
    blurb: 'Dark roast, double shot, small cup.',
    description: 'Double, dark, and served after the plates go. No, there is no oat milk version.',
    ingredients: ['Espresso blend'],
    tags: ['Hot'],
  },

  /* --------------------------------------------------------------- sweets */
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    category: 'sweets',
    price: 7,
    kcal: 420,
    time: '3 min',
    image: tiramisu,
    blurb: 'Mascarpone, savoiardi, a lot of espresso.',
    description:
      'Made in a tray each morning and scooped rather than sliced, which is the honest way to serve it. Heavy on the espresso, light on the sugar.',
    ingredients: ['Mascarpone', 'Savoiardi', 'Espresso', 'Cocoa'],
    tags: ['Vegetarian'],
  },
  {
    id: 'nutella-bites',
    name: 'Chocolate Dough Bites',
    category: 'sweets',
    price: 6,
    kcal: 460,
    time: '7 min',
    image: nutellaBites,
    blurb: 'Pizza dough, fried, chocolate hazelnut, icing sugar.',
    description:
      'The same dough again, torn into knuckles and fried instead of baked, rolled in sugar and served with warm chocolate hazelnut to dunk them in.',
    ingredients: ['48-hour dough', 'Chocolate hazelnut', 'Icing sugar'],
    tags: ['Vegetarian', 'Sharing'],
  },
  {
    id: 'gelato',
    name: 'Pistachio Gelato',
    category: 'sweets',
    price: 5,
    kcal: 280,
    time: '2 min',
    image: gelato,
    blurb: 'Bronte pistachio, two scoops, cold.',
    description:
      'Bronte pistachio and not much else — green because of the nut, not because of a bottle.',
    ingredients: ['Bronte pistachio', 'Milk', 'Cane sugar'],
    tags: ['Vegetarian', 'Cold'],
  },
]

export const findItem = (id) => menu.find((m) => m.id === id)

export const itemsIn = (categoryId) => menu.filter((m) => m.category === categoryId)

/**
 * How each section is ordered.
 *
 * Every section builds an order the same way — a size, an either/or choice and
 * a set of extras — but the words change completely: a drink has no crust and
 * a pizza has no bun. Keeping the shape identical is what lets one builder
 * screen serve the whole menu; keeping the copy specific is what stops it
 * reading like a form.
 *
 * `delta` is added to the item's base price. `size` is what a cart line is
 * keyed on, so two sizes of the same item stay on separate lines.
 */
const dips = [
  { id: 'garlic-mayo', label: 'Garlic mayo', price: 1 },
  { id: 'chilli-honey', label: 'Chilli honey', price: 1 },
  { id: 'blue-cheese', label: 'Blue cheese', price: 1.5 },
  { id: 'marinara', label: 'Marinara', price: 1 },
]

export const builders = {
  pizza: {
    size: {
      legend: 'Size',
      options: [
        { id: '10', title: '10"', note: 'Small · 6 slices', delta: -3 },
        { id: '12', title: '12"', note: 'Medium · 8 slices', delta: 0 },
        { id: '14', title: '14"', note: 'Large · 8 slices', delta: 4 },
      ],
    },
    variant: {
      legend: 'Crust',
      options: [
        { id: 'classic', title: 'Classic', note: '48-hour, hand-stretched', delta: 0 },
        { id: 'thin', title: 'Roman thin', note: 'crisp, cracker-thin', delta: 0 },
        { id: 'stuffed', title: 'Stuffed', note: 'mozzarella-filled rim', delta: 2 },
      ],
    },
    extras: {
      legend: 'Add extras',
      options: [
        { id: 'cheese', label: 'Extra mozzarella', price: 2 },
        { id: 'nduja', label: 'Nduja', price: 2.5 },
        { id: 'basil', label: 'Fresh basil', price: 1 },
        { id: 'honey', label: 'Chilli honey', price: 1.5 },
      ],
    },
  },

  burgers: {
    size: {
      legend: 'Patty',
      options: [
        { id: 'single', title: 'Single', note: '90g', delta: 0 },
        { id: 'double', title: 'Double', note: '180g', delta: 4 },
        { id: 'triple', title: 'Triple', note: '270g', delta: 7 },
      ],
    },
    variant: {
      legend: 'Bun',
      options: [
        { id: 'potato', title: 'Potato', note: 'soft, steamed', delta: 0 },
        { id: 'brioche', title: 'Brioche', note: 'sweet, toasted', delta: 0 },
        { id: 'lettuce', title: 'No bun', note: 'gem lettuce wrap', delta: 0 },
      ],
    },
    extras: {
      legend: 'Add extras',
      options: [
        { id: 'bacon', label: 'Smoked bacon', price: 2 },
        { id: 'cheese', label: 'Extra cheese', price: 1.5 },
        { id: 'jalapeno', label: 'Pickled jalapeño', price: 1 },
        { id: 'egg', label: 'Fried egg', price: 1.5 },
      ],
    },
  },

  fried: {
    size: {
      legend: 'Portion',
      options: [
        { id: 'regular', title: 'Regular', note: 'one person', delta: 0 },
        { id: 'large', title: 'Large', note: 'one hungry person', delta: 2 },
        { id: 'sharing', title: 'Sharing', note: 'the whole table', delta: 5 },
      ],
    },
    variant: {
      legend: 'Seasoning',
      options: [
        { id: 'salt', title: 'Sea salt', note: 'as it comes', delta: 0 },
        { id: 'cajun', title: 'Cajun', note: 'smoky, hot', delta: 0 },
        { id: 'truffle', title: 'Truffle', note: 'and parmesan', delta: 1.5 },
      ],
    },
    extras: { legend: 'Add a dip', options: dips },
  },

  falafel: {
    size: {
      legend: 'Size',
      options: [
        { id: 'regular', title: 'Regular', note: 'six falafel', delta: 0 },
        { id: 'large', title: 'Large', note: 'nine falafel', delta: 3 },
      ],
    },
    variant: {
      legend: 'Served as',
      options: [
        { id: 'wrap', title: 'Wrap', note: 'rolled, to go', delta: 0 },
        { id: 'pita', title: 'Open pita', note: 'warmed on the deck', delta: 0 },
        { id: 'plate', title: 'Plate', note: 'salad and pickles', delta: 2 },
      ],
    },
    extras: {
      legend: 'Add extras',
      options: [
        { id: 'hummus', label: 'Extra hummus', price: 1.5 },
        { id: 'turnip', label: 'Pickled turnip', price: 1 },
        { id: 'zhoug', label: 'Zhoug', price: 1 },
        { id: 'fries-in', label: 'Fries inside', price: 1.5 },
      ],
    },
  },

  cold: {
    size: {
      legend: 'Portion',
      options: [
        { id: 'starter', title: 'Starter', note: 'before the hot food', delta: 0 },
        { id: 'main', title: 'Main', note: 'double, as a meal', delta: 4 },
      ],
    },
    variant: {
      legend: 'Finish',
      options: [
        { id: 'oil', title: 'Olive oil', note: 'as the kitchen sends it', delta: 0 },
        { id: 'lemon', title: 'Extra lemon', note: 'sharper', delta: 0 },
        { id: 'chilli', title: 'Chilli flake', note: 'a little heat', delta: 0 },
      ],
    },
    extras: {
      legend: 'Add extras',
      options: [
        { id: 'pita', label: 'Warm pita', price: 1.5 },
        { id: 'feta', label: 'Crumbled feta', price: 2 },
        { id: 'olives', label: 'Marinated olives', price: 2 },
      ],
    },
  },

  sides: {
    size: {
      legend: 'Portion',
      options: [
        { id: 'regular', title: 'Regular', note: 'one person', delta: 0 },
        { id: 'sharing', title: 'Sharing', note: 'the whole table', delta: 3 },
      ],
    },
    extras: { legend: 'Add a dip', options: dips },
  },

  drinks: {
    size: {
      legend: 'Size',
      options: [
        { id: '330', title: '330ml', note: 'one glass', delta: 0 },
        { id: '500', title: '500ml', note: 'a tall one', delta: 1 },
        { id: 'jug', title: 'Jug', note: 'serves four', delta: 6 },
      ],
    },
    variant: {
      legend: 'Serve',
      options: [
        { id: 'ice', title: 'Over ice', note: 'as it comes', delta: 0 },
        { id: 'no-ice', title: 'No ice', note: 'straight, cold', delta: 0 },
        { id: 'bottle', title: 'In the bottle', note: 'unopened', delta: 0 },
      ],
    },
    extras: {
      legend: 'Add extras',
      options: [
        { id: 'lemon', label: 'Wedge of lemon', price: 0.5 },
        { id: 'mint', label: 'Fresh mint', price: 0.5 },
        { id: 'syrup', label: 'Peach syrup', price: 1 },
      ],
    },
  },

  sweets: {
    size: {
      legend: 'Portion',
      options: [
        { id: 'one', title: 'One', note: 'single serve', delta: 0 },
        { id: 'two', title: 'To share', note: 'two spoons', delta: 3 },
      ],
    },
    extras: {
      legend: 'Add extras',
      options: [
        { id: 'cream', label: 'Whipped cream', price: 1 },
        { id: 'scoop', label: 'Scoop of gelato', price: 2 },
        { id: 'espresso', label: 'Espresso alongside', price: 2.5 },
      ],
    },
  },
}

export const builderFor = (categoryId) => builders[categoryId] ?? builders.sides

/**
 * The featured reviews — the six the site shows, not the whole book. Each one
 * names the thing it is about, so the section doubles as a way into the menu
 * and stops reading like it is still a pizza-only shop.
 */
export const reviews = [
  {
    name: 'Marta L.',
    meta: 'Old Town, twice a week',
    stars: 5,
    item: 'pepperoni',
    quote: 'The rim is the best thing on the menu and it is not even a topping.',
  },
  {
    name: 'Deniz A.',
    meta: 'First visit',
    stars: 5,
    item: 'smash-classic',
    quote: 'Ordered at 7:12, eating at 7:41. Still too hot to hold.',
  },
  {
    name: 'Sam R.',
    meta: 'Riverside regular',
    stars: 4,
    item: 'margherita',
    quote: 'They run out of dough by nine on Fridays. Go early, that is the whole review.',
  },
  {
    name: 'Yara K.',
    meta: 'Vegetarian, sceptical',
    stars: 5,
    item: 'falafel-wrap',
    quote: 'I have had falafel you could patch a wall with. This is not that.',
  },
  {
    name: 'Tom B.',
    meta: 'Friday five-a-side',
    stars: 4,
    item: 'loaded-fries',
    quote: 'We get these for the table and then nobody speaks for four minutes.',
  },
  {
    name: 'Priya N.',
    meta: 'Works two streets away',
    stars: 5,
    item: 'mint-yoghurt',
    quote: 'Ordered it because the counter insisted. Now I order the harissa burger just to have an excuse.',
  },
]

/** The running total on the door, not the length of the array above. */
export const reviewCount = 312
