const products = [
  {
    id: 2,
    name: 'Giggle Banana',
    price: 0.80,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'Happy Orange',
    price: 1.20,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Giggly Lipstick',
    price: 15.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 5,
    name: 'Fun Foundation',
    price: 25.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 6,
    name: 'Silly Mascara',
    price: 10.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 7,
    name: 'Joy Bread',
    price: 2.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 8,
    name: 'Cheerful Milk',
    price: 1.80,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 9,
    name: 'Playful Shampoo',
    price: 8.00,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 10,
    name: 'Merry Conditioner',
    price: 8.50,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 11,
    name: 'Giggle Grapes',
    price: 2.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1537640538966-79f36943f303?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 12,
    name: 'Happy Strawberries',
    price: 3.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 13,
    name: 'Cheery Yogurt',
    price: 1.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 14,
    name: 'Jolly Cheese',
    price: 4.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 15,
    name: 'Playful Eggs',
    price: 2.20,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 16,
    name: 'Silly Blush',
    price: 12.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 17,
    name: 'Fun Eyeshadow',
    price: 18.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 18,
    name: 'Merry Nail Polish',
    price: 6.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 19,
    name: 'Cheerful Perfume',
    price: 30.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 20,
    name: 'Giggly Lip Gloss',
    price: 12.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 21,
    name: 'Silly Eyelashes',
    price: 8.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 22,
    name: 'Fun Makeup Kit',
    price: 35.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 23,
    name: 'Cheerful Cereal',
    price: 3.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 24,
    name: 'Jolly Juice',
    price: 2.80,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 25,
    name: 'Playful Pasta',
    price: 1.90,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 26,
    name: 'Giggle Toilet Roll',
    price: 2.50,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031e2bb?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 27,
    name: 'Happy Washing Powder',
    price: 4.00,
    category: 'groceries',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=150&h=150&fit=crop&crop=center'
  }
];

export default products;
