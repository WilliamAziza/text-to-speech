const products = [
  {
    id: 2,
    name: 'Glow Body',
    price: 0.80,
    category: 'groceries',
    image: '/images/glow body.jpeg',
    description: 'A perfectly ripe banana that brings joy to your breakfast. Packed with potassium and natural sweetness.',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Lipstick',
    price: 1.20,
    category: 'groceries',
    image: '/images/lipstick.jpg',
    description: 'Juicy and sweet orange that brings sunshine to your day. Rich in vitamin C and bursting with flavor.',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Logo',
    price: 15.00,
    category: 'cosmetics',
    image: '/images/logo.png',
    description: 'Long-lasting lipstick that adds a playful pop of color to your smile. Creamy formula with a matte finish.',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Scottish Oats',
    price: 25.00,
    category: 'cosmetics',
    image: '/images/scottish oats.jpeg',
    description: 'Build a flawless base with this lightweight foundation that blends seamlessly for all-day wear.',
    rating: 4.3
  },
  {
    id: 6,
    name: 'Glow Body',
    price: 10.00,
    category: 'cosmetics',
    image: '/images/glow body.jpeg',
    description: 'Volumizing mascara that adds length and definition to your lashes for a dramatic look.',
    rating: 4.1
  },
  {
    id: 7,
    name: 'Lipstick',
    price: 2.00,
    category: 'groceries',
    image: '/images/lipstick.jpg',
    description: 'Freshly baked bread with a soft texture and golden crust, perfect for sandwiches or toast.',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Logo',
    price: 1.80,
    category: 'groceries',
    image: '/images/logo.png',
    description: 'Creamy whole milk sourced from happy cows, rich in calcium and vitamins.',
    rating: 4.0
  },
  {
    id: 9,
    name: 'Playful Shampoo',
    price: 8.00,
    category: 'cosmetics',
    image: '/images/scottish oats.jpeg',
    description: 'Gentle shampoo that cleanses and nourishes your hair, leaving it soft and manageable.',
    rating: 4.6
  },
  {
    id: 10,
    name: 'Glow Body',
    price: 8.50,
    category: 'cosmetics',
    image: '/images/glow body.jpeg',
    description: 'Hydrating conditioner that detangles and smooths hair for a silky finish.',
    rating: 4.5
  },
  {
    id: 11,
    name: 'Lipstick',
    price: 2.50,
    category: 'groceries',
    image: '/images/lipstick.jpg',
    description: 'Sweet and juicy grapes bursting with flavor, a healthy snack for any time.',
    rating: 4.3
  },
  {
    id: 12,
    name: 'Logo',
    price: 3.00,
    category: 'groceries',
    image: '/images/logo.png',
    description: 'Fresh, vibrant strawberries packed with antioxidants and natural sweetness.',
    rating: 4.8
  },
  {
    id: 13,
    name: 'Cheery Yogurt',
    price: 1.50,
    category: 'groceries',
    image: '/images/scottish oats.jpeg',
    description: 'Creamy Greek yogurt with a tangy flavor, perfect for breakfast or snacks.',
    rating: 4.2
  },
  {
    id: 14,
    name: 'Glow Body',
    price: 4.00,
    category: 'groceries',
    image: '/images/glow body.jpeg',
    description: 'Aged cheddar cheese with a sharp, nutty flavor, great for sandwiches or cheese boards.',
    rating: 4.4
  },
  {
    id: 15,
    name: 'Lipstick',
    price: 2.20,
    category: 'groceries',
    image: '/images/lipstick.jpg',
    description: 'Farm-fresh eggs with rich yolks, ideal for cooking or baking.',
    rating: 4.1
  },
  {
    id: 16,
    name: 'Logo',
    price: 12.00,
    category: 'cosmetics',
    image: '/images/logo.png',
    description: 'Powdery blush that adds a natural flush to your cheeks for a rosy glow.',
    rating: 4.0
  },
  {
    id: 17,
    name: 'Fun Eyeshadow',
    price: 18.00,
    category: 'cosmetics',
    image: '/images/scottish oats.jpeg',
    description: 'Vibrant eyeshadow palette with blendable shades for creative eye looks.',
    rating: 4.5
  },
  {
    id: 18,
    name: 'Glow Body',
    price: 6.00,
    category: 'cosmetics',
    image: '/images/glow body.jpeg',
    description: 'Quick-drying nail polish in cheerful colors for a polished manicure.',
    rating: 4.3
  },
  {
    id: 19,
    name: 'Lipstick',
    price: 30.00,
    category: 'cosmetics',
    image: '/images/lipstick.jpg',
    description: 'Floral fragrance with notes of jasmine and rose, perfect for everyday elegance.',
    rating: 4.7
  },
  {
    id: 20,
    name: 'Logo',
    price: 12.00,
    category: 'cosmetics',
    image: '/images/logo.png',
    description: 'Shiny lip gloss that moisturizes and adds a playful sheen to your lips.',
    rating: 4.4
  },
  {
    id: 21,
    name: 'Silly Eyelashes',
    price: 8.00,
    category: 'cosmetics',
    image: '/images/scottish oats.jpeg',
    description: 'False eyelashes that add volume and drama to your eyes for special occasions.',
    rating: 4.2
  },
  {
    id: 22,
    name: 'Glow Body',
    price: 35.00,
    category: 'cosmetics',
    image: '/images/glow body.jpeg',
    description: 'Complete makeup set with essentials for a full face transformation.',
    rating: 4.6
  },
  {
    id: 23,
    name: 'Lipstick',
    price: 3.50,
    category: 'groceries',
    image: '/images/lipstick.jpg',
    description: 'Crunchy cereal flakes with a hint of sweetness, great for a quick breakfast.',
    rating: 4.0
  },
  {
    id: 24,
    name: 'Logo',
    price: 2.80,
    category: 'groceries',
    image: '/images/logo.png',
    description: 'Refreshing fruit juice blend packed with vitamins for a healthy boost.',
    rating: 4.1
  },
  {
    id: 25,
    name: 'Scottish Oats',
    price: 1.90,
    category: 'groceries',
    image: '/images/scottish oats.jpeg',
    description: 'Al dente pasta noodles, versatile for any sauce or recipe.',
    rating: 4.3
  },
  {
    id: 26,
    name: 'Glow Body',
    price: 2.50,
    category: 'groceries',
    image: '/images/glow body.jpeg',
    description: 'Soft and absorbent toilet paper for everyday comfort and hygiene.',
    rating: 3.9
  },
  {
    id: 27,
    name: 'Lipstick',
    price: 4.00,
    category: 'groceries',
    image: '/images/lipstick.jpg',
    description: 'Effective laundry detergent that cleans clothes thoroughly while being gentle on fabrics.',
    rating: 4.2
  }
];

export default products;
