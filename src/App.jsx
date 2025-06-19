import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'VLYR Phantom Runner',
    price: '$180',
    image: '/sneaker1-front.jpg',
    hoverImage: '/sneaker1-side.jpg',
  },
  {
    name: 'VLYR Apex Trainer',
    price: '$210',
    image: '/sneaker2-front.jpg',
    hoverImage: '/sneaker2-side.jpg',
  },
];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            UNLEASH THE DROP
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Premium performance meets limited edition energy. VLYR is here.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Shop Collection
          </button>
        </motion.div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Featured Sneakers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-2xl group-hover:opacity-0 transition duration-300"
              />
              <img
                src={product.hoverImage}
                alt={product.name + ' hover'}
                className="w-full h-80 object-cover rounded-2xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}