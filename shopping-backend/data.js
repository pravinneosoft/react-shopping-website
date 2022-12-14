import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'nike shirt',
      price: 100,
      slug: 'nike-slim',
      category: 'shirt',
      image: '/images/5.jpg',
      countinstock: 10,
      brand: 'nike',
      rating: 4.5,
      numReviews: 10,
      desc: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'nice  shirt',
      price: 200,
      slug: 'adidas-slim',
      category: 'shirt',
      image: '/images/OIP.jpg',
      countinstock: 10,
      brand: 'nike',
      rating: 4.5,
      numReviews: 10,
      desc: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'puma shirt',
      price: 450,
      slug: 'puma-slim',
      category: 'shirt',
      image: '/images/3.jpg',
      countinstock: 10,
      brand: 'puma',
      rating: 4.5,
      numReviews: 10,
      desc: 'high quality shirt',
    },
    {
      // _id: '4',
      name: 'rebook shirt',
      price: 540,
      slug: 'rebook-slim',
      category: 'shirt',
      image: '/images/2.jpg',
      countinstock: 1500,
      brand: 'rebook',
      rating: 4.5,
      numReviews: 10,
      desc: 'high quality shirt',
    },
  
  ],
};
export default data;
