const products = [
  {
    id: 2,
    name: 'Giggle Banana',
    price: 0.80,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=150&h=150&fit=crop&crop=center',
    description: 'A perfectly ripe banana that brings joy to your breakfast. Packed with potassium and natural sweetness.',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Happy Orange',
    price: 1.20,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=150&h=150&fit=crop&crop=center',
    description: 'Juicy and sweet orange that brings sunshine to your day. Rich in vitamin C and bursting with flavor.',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Giggly Lipstick',
    price: 15.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop&crop=center',
    description: 'Long-lasting lipstick that adds a playful pop of color to your smile. Creamy formula with a matte finish.',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Fun Foundation',
    price: 25.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center',
    description: 'Build a flawless base with this lightweight foundation that blends seamlessly for all-day wear.',
    rating: 4.3
  },
  {
    id: 6,
    name: 'Silly Mascara',
    price: 10.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center',
    description: 'Volumizing mascara that adds length and definition to your lashes for a dramatic look.',
    rating: 4.1
  },
  {
    id: 7,
    name: 'Joy Bread',
    price: 2.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop&crop=center',
    description: 'Freshly baked bread with a soft texture and golden crust, perfect for sandwiches or toast.',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Cheerful Milk',
    price: 1.80,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&h=150&fit=crop&crop=center',
    description: 'Creamy whole milk sourced from happy cows, rich in calcium and vitamins.',
    rating: 4.0
  },
  {
    id: 9,
    name: 'Playful Shampoo',
    price: 8.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop&crop=center',
    description: 'Gentle shampoo that cleanses and nourishes your hair, leaving it soft and manageable.',
    rating: 4.6
  },
  {
    id: 10,
    name: 'Merry Conditioner',
    price: 8.50,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop&crop=center',
    description: 'Hydrating conditioner that detangles and smooths hair for a silky finish.',
    rating: 4.5
  },
  {
    id: 11,
    name: 'Giggle Grapes',
    price: 2.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1537640538966-79f36943f303?w=150&h=150&fit=crop&crop=center',
    description: 'Sweet and juicy grapes bursting with flavor, a healthy snack for any time.',
    rating: 4.3
  },
  {
    id: 12,
    name: 'Happy Strawberries',
    price: 3.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=150&h=150&fit=crop&crop=center',
    description: 'Fresh, vibrant strawberries packed with antioxidants and natural sweetness.',
    rating: 4.8
  },
  {
    id: 13,
    name: 'Cheery Yogurt',
    price: 1.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150&h=150&fit=crop&crop=center',
    description: 'Creamy Greek yogurt with a tangy flavor, perfect for breakfast or snacks.',
    rating: 4.2
  },
  {
    id: 14,
    name: 'Jolly Cheese',
    price: 4.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=150&h=150&fit=crop&crop=center',
    description: 'Aged cheddar cheese with a sharp, nutty flavor, great for sandwiches or cheese boards.',
    rating: 4.4
  },
  {
    id: 15,
    name: 'Playful Eggs',
    price: 2.20,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center',
    description: 'Farm-fresh eggs with rich yolks, ideal for cooking or baking.',
    rating: 4.1
  },
  {
    id: 16,
    name: 'Silly Blush',
    price: 12.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center',
    description: 'Powdery blush that adds a natural flush to your cheeks for a rosy glow.',
    rating: 4.0
  },
  {
    id: 17,
    name: 'Fun Eyeshadow',
    price: 18.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center',
    description: 'Vibrant eyeshadow palette with blendable shades for creative eye looks.',
    rating: 4.5
  },
  {
    id: 18,
    name: 'Merry Nail Polish',
    price: 6.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop&crop=center',
    description: 'Quick-drying nail polish in cheerful colors for a polished manicure.',
    rating: 4.3
  },
  {
    id: 19,
    name: 'Cheerful Perfume',
    price: 30.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=150&h=150&fit=crop&crop=center',
    description: 'Floral fragrance with notes of jasmine and rose, perfect for everyday elegance.',
    rating: 4.7
  },
  {
    id: 20,
    name: 'Giggly Lip Gloss',
    price: 12.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop&crop=center',
    description: 'Shiny lip gloss that moisturizes and adds a playful sheen to your lips.',
    rating: 4.4
  },
  {
    id: 21,
    name: 'Silly Eyelashes',
    price: 8.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center',
    description: 'False eyelashes that add volume and drama to your eyes for special occasions.',
    rating: 4.2
  },
  {
    id: 22,
    name: 'Fun Makeup Kit',
    price: 35.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center',
    description: 'Complete makeup set with essentials for a full face transformation.',
    rating: 4.6
  },
  {
    id: 23,
    name: 'Cheerful Cereal',
    price: 3.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center',
    description: 'Crunchy cereal flakes with a hint of sweetness, great for a quick breakfast.',
    rating: 4.0
  },
  {
    id: 24,
    name: 'Jolly Juice',
    price: 2.80,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=150&h=150&fit=crop&crop=center',
    description: 'Refreshing fruit juice blend packed with vitamins for a healthy boost.',
    rating: 4.1
  },
  {
    id: 25,
    name: 'Playful Pasta',
    price: 1.90,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=150&h=150&fit=crop&crop=center',
    description: 'Al dente pasta noodles, versatile for any sauce or recipe.',
    rating: 4.3
  },
  {
    id: 26,
    name: 'Giggle Toilet Roll',
    price: 2.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031e2bb?w=150&h=150&fit=crop&crop=center',
    description: 'Soft and absorbent toilet paper for everyday comfort and hygiene.',
    rating: 3.9
  },
  {
    id: 27,
    name: 'Happy Washing Powder',
    price: 4.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=150&h=150&fit=crop&crop=center',
    description: 'Effective laundry detergent that cleans clothes thoroughly while being gentle on fabrics.',
    rating: 4.2
  }
];

export default products;
