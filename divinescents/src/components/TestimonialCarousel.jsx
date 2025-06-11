import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Aria Sharma",
    message: "Absolutely in love with the Vanilla Dream candle! It fills the whole room with warmth.",
    image: "/images/user1.jpg",
  },
  {
    name: "Rahul Mehta",
    message: "Perfect gift for my sister — elegant packaging and soothing fragrance. Will buy again!",
    image: "/images/user2.jpg",
  },
  {
    name: "Tanya Das",
    message: "The cinnamon candle reminds me of cozy winters. Amazing quality and fast delivery!",
    image: "/images/user3.jpg",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>

      <div className="max-w-xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-rose-50 p-6 rounded-3xl shadow-lg text-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 text-lg italic mb-4">“{testimonials[index].message}”</p>
            <h4 className="font-semibold text-rosePink">{testimonials[index].name}</h4>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <button onClick={prev} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <FiChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <button onClick={next} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
