const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 6686.98, // INR
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'iPhone 13 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 44999.85, // INR
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Canon',
    category: 'Electronics',
    price: 82397.92, // INR
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Sony Playstation 5',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 55999.85, // INR
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 3749.92, // INR
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 2249.92, // INR
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Samsung Galaxy Watch 4',
    image: '/images/sample.jpg',
    description:
      'Stay connected and live a healthier lifestyle with Samsung Galaxy Watch 4. Track your fitness, monitor your sleep, and stay organized with this sleek smartwatch.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 18711.88, // INR
    countInStock: 15,
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: 'Dell XPS 13 Laptop',
    image: '/images/sample.jpg',
    description:
      'Experience incredible performance and portability with the Dell XPS 13 Laptop. Featuring a stunning display and powerful performance, it’s perfect for productivity and entertainment on-the-go.',
    brand: 'Dell',
    category: 'Electronics',
    price: 82549.85, // INR
    countInStock: 10,
    rating: 4.9,
    numReviews: 25,
  },
  {
    name: 'Nintendo Switch OLED Model',
    image: '/images/sample.jpg',
    description:
      'Immerse yourself in gaming with the Nintendo Switch OLED Model. Featuring a vibrant OLED display and versatile gaming options, it’s the ultimate console for gamers of all ages.',
    brand: 'Nintendo',
    category: 'Electronics',
    price: 24499.88, // INR
    countInStock: 20,
    rating: 4.7,
    numReviews: 30,
  },
  {
    name: 'Fitbit Charge 5 Fitness Tracker',
    image: '/images/sample.jpg',
    description:
      'Track your fitness goals and stay motivated with the Fitbit Charge 5 Fitness Tracker. Monitor your heart rate, track your workouts, and improve your sleep with this advanced wearable device.',
    brand: 'Fitbit',
    category: 'Electronics',
    price: 13499.91, // INR
    countInStock: 18,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'LG 55-Inch OLED 4K TV',
    image: '/images/sample.jpg',
    description:
      'Experience stunning picture quality and immersive sound with the LG 55-Inch OLED 4K TV. Featuring OLED technology and smart capabilities, it’s the perfect addition to any home entertainment setup.',
    brand: 'LG',
    category: 'Electronics',
    price: 111599.88, // INR
    countInStock: 8,
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: 'Microsoft Surface Pro 8',
    image: '/images/sample.jpg',
    description:
      'Get the power of a laptop and the versatility of a tablet with the Microsoft Surface Pro 8. Featuring a stunning display and powerful performance, it’s perfect for work and play.',
    brand: 'Microsoft',
    category: 'Electronics',
    price: 84974.85, // INR
    countInStock: 12,
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: 'Bose SoundLink Revolve+ Bluetooth Speaker',
    image: '/images/sample.jpg',
    description:
      'Experience immersive sound and deep bass with the Bose SoundLink Revolve+ Bluetooth Speaker. With 360-degree sound and a long-lasting battery, it’s perfect for parties, outdoor adventures, and more.',
    brand: 'Bose',
    category: 'Electronics',
    price: 22499.91, // INR
    countInStock: 14,
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: 'GoPro HERO10 Black',
    image: '/images/sample.jpg',
    description:
      'Capture stunning 5.3K video and 23MP photos with the GoPro HERO10 Black. Featuring HyperSmooth 4.0 stabilization and advanced low-light performance, it’s the ultimate action camera for adventurers.',
    brand: 'GoPro',
    category: 'Electronics',
    price: 37499.88, // INR
    countInStock: 10,
    rating: 4.9,
    numReviews: 28,
  },
  {
    name: 'Xbox Series X',
    image: '/images/sample.jpg',
    description:
      'Experience next-gen gaming with the Xbox Series X. Featuring 4K gaming, 120fps support, and lightning-fast load times, it’s the most powerful Xbox ever made.',
    brand: 'Microsoft',
    category: 'Electronics',
    price: 37499.88, // INR
    countInStock: 15,
    rating: 4.8,
    numReviews: 35,
  },
  {
    name: 'Apple Watch Series 7',
    image: '/images/sample.jpg',
    description:
      'Stay connected and stay healthy with the Apple Watch Series 7. Featuring a stunning display and advanced health tracking features, it’s the ultimate smartwatch for your active lifestyle.',
    brand: 'Apple',
    category: 'Electronics',
    price: 29999.85, // INR
    countInStock: 20,
    rating: 4.9,
    numReviews: 40,
  },
];

export default products;
