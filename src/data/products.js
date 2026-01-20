const products = [
  {
    id: 2,
    name: 'Giggle Banana',
    price: 0.80,
    category: 'groceries',
    image: '../components/images/aptamil.jpeg',
    description: 'A perfectly ripe banana that brings joy to your breakfast. Packed with potassium and natural sweetness.',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Happy Orange',
    price: 1.20,
    category: 'groceries',
    image: '../components/images/body butter.jpeg',
    description: 'Juicy and sweet orange that brings sunshine to your day. Rich in vitamin C and bursting with flavor.',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Giggly Lipstick',
    price: 15.00,
    category: 'cosmetics',
    image: '../components/images/glow body.jpeg',
    description: 'Long-lasting lipstick that adds a playful pop of color to your smile. Creamy formula with a matte finish.',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Fun Foundation',
    price: 25.00,
    category: 'cosmetics',
    image: '../components/images/lipstick.jpg',
    description: 'Build a flawless base with this lightweight foundation that blends seamlessly for all-day wear.',
    rating: 4.3
  },
  {
    id: 6,
    name: 'Silly Mascara',
    price: 10.00,
    category: 'cosmetics',
    image: '../components/images/logo.png',
    description: 'Volumizing mascara that adds length and definition to your lashes for a dramatic look.',
    rating: 4.1
  },
  {
    id: 7,
    name: 'Joy Bread',
    price: 2.00,
    category: 'groceries',
    image: '../components/images/scottish oats.jpeg',
    description: 'Freshly baked bread with a soft texture and golden crust, perfect for sandwiches or toast.',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Cheerful Milk',
    price: 1.80,
    category: 'groceries',
    image: '../components/images/aptamil.jpeg',
    description: 'Creamy whole milk sourced from happy cows, rich in calcium and vitamins.',
    rating: 4.0
  },
  {
    id: 9,
    name: 'Playful Shampoo',
    price: 8.00,
    category: 'cosmetics',
    image: '../components/images/body butter.jpeg',
    description: 'Gentle shampoo that cleanses and nourishes your hair, leaving it soft and manageable.',
    rating: 4.6
  },
  {
    id: 10,
    name: 'Merry Conditioner',
    price: 8.50,
    category: 'cosmetics',
    image: '../components/images/glow body.jpeg',
    description: 'Hydrating conditioner that detangles and smooths hair for a silky finish.',
    rating: 4.5
  },
  {
    id: 11,
    name: 'Giggle Grapes',
    price: 2.50,
    category: 'groceries',
    image: '../components/images/lipstick.jpg',
    description: 'Sweet and juicy grapes bursting with flavor, a healthy snack for any time.',
    rating: 4.3
  },
  {
    id: 12,
    name: 'Happy Strawberries',
    price: 3.00,
    category: 'groceries',
    image: '../components/images/logo.png',
    description: 'Fresh, vibrant strawberries packed with antioxidants and natural sweetness.',
    rating: 4.8
  },
  {
    id: 13,
    name: 'Cheery Yogurt',
    price: 1.50,
    category: 'groceries',
    image: '../components/images/scottish oats.jpeg',
    description: 'Creamy Greek yogurt with a tangy flavor, perfect for breakfast or snacks.',
    rating: 4.2
  },
  {
    id: 14,
    name: 'Jolly Cheese',
    price: 4.00,
    category: 'groceries',
    image: '../components/images/aptamil.jpeg',
    description: 'Aged cheddar cheese with a sharp, nutty flavor, great for sandwiches or cheese boards.',
    rating: 4.4
  },
  {
    id: 15,
    name: 'Playful Eggs',
    price: 2.20,
    category: 'groceries',
    image: '../components/images/body butter.jpeg',
    description: 'Farm-fresh eggs with rich yolks, ideal for cooking or baking.',
    rating: 4.1
  },
  {
    id: 16,
    name: 'Silly Blush',
    price: 12.00,
    category: 'cosmetics',
    image: '../components/images/glow body.jpeg',
    description: 'Powdery blush that adds a natural flush to your cheeks for a rosy glow.',
    rating: 4.0
  },
  {
    id: 17,
    name: 'Fun Eyeshadow',
    price: 18.00,
    category: 'cosmetics',
    image: '../components/images/lipstick.jpg',
    description: 'Vibrant eyeshadow palette with blendable shades for creative eye looks.',
    rating: 4.5
  },
  {
    id: 18,
    name: 'Merry Nail Polish',
    price: 6.00,
    category: 'cosmetics',
    image: '../components/images/logo.png',
    description: 'Quick-drying nail polish in cheerful colors for a polished manicure.',
    rating: 4.3
  },
  {
    id: 19,
    name: 'Cheerful Perfume',
    price: 30.00,
    category: 'cosmetics',
    image: '../components/images/aptamil.jpeg',
    description: 'Floral fragrance with notes of jasmine and rose, perfect for everyday elegance.',
    rating: 4.7
  },
  {
    id: 20,
    name: 'Giggly Lip Gloss',
    price: 12.00,
    category: 'cosmetics',
    image: '../components/images/aptamil.jpeg',
    description: 'Shiny lip gloss that moisturizes and adds a playful sheen to your lips.',
    rating: 4.4
  },
  {
    id: 21,
    name: 'Silly Eyelashes',
    price: 8.00,
    category: 'cosmetics',
    image: '../components/images/body butter.jpeg',
    description: 'False eyelashes that add volume and drama to your eyes for special occasions.',
    rating: 4.2
  },
  {
    id: 22,
    name: 'Fun Makeup Kit',
    price: 35.00,
    category: 'cosmetics',
    image: '../components/images/glow body.jpeg',
    description: 'Complete makeup set with essentials for a full face transformation.',
    rating: 4.6
  },
  {
    id: 23,
    name: 'Cheerful Cereal',
    price: 3.50,
    category: 'groceries',
    image: '../components/images/logo.png',
    description: 'Crunchy cereal flakes with a hint of sweetness, great for a quick breakfast.',
    rating: 4.0
  },
  {
    id: 24,
    name: 'Jolly Juice',
    price: 2.80,
    category: 'groceries',
    image: '../components/images/scottish oats.jpeg',
    description: 'Refreshing fruit juice blend packed with vitamins for a healthy boost.',
    rating: 4.1
  },
  {
    id: 25,
    name: 'Playful Pasta',
    price: 1.90,
    category: 'groceries',
    image: '../components/images/aptamil.jpeg',
    description: 'Al dente pasta noodles, versatile for any sauce or recipe.',
    rating: 4.3
  },
  {
    id: 26,
    name: 'Giggle Toilet Roll',
    price: 2.50,
    category: 'groceries',
    image: '../components/images/body butter.jpeg',
    description: 'Soft and absorbent toilet paper for everyday comfort and hygiene.',
    rating: 3.9
  },
  {
    id: 27,
    name: 'Happy Washing Powder',
    price: 4.00,
    category: 'groceries',
    image: '../components/images/glow body.jpeg',
    description: 'Effective laundry detergent that cleans clothes thoroughly while being gentle on fabrics.',
    rating: 4.2
  }
];

export default products;
