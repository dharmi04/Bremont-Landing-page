import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'This watch is a masterpiece. The build quality is outstanding and it feels premium on my wrist. Highly recommend!',
    rating: 5,
    avatar: 'path-to-avatar1.png' // Replace with your avatar path
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'I love the precision of this watch. It’s stylish, functional, and perfect for every occasion.',
    rating: 4,
    avatar: 'path-to-avatar2.png' // Replace with your avatar path
  },
  {
    id: 3,
    name: 'David Wilson',
    review: 'The leather strap and the overall design of the watch are just amazing. I get compliments everywhere I go!',
    rating: 5,
    avatar: 'path-to-avatar3.png' // Replace with your avatar path
  }
];

const CustomerReviews = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">{review.name}</h4>
                  <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
