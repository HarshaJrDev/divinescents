import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const NewsletterModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000); // after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed top-1/2 left-1/2 bg-white rounded-2xl p-8 shadow-xl w-[90%] max-w-md z-50 transform -translate-x-1/2 -translate-y-1/2 font-poppins"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-400" onClick={handleClose}>
              <FiX size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Join Our Candle Club 🕯</h2>
            <p className="text-gray-600 text-center mb-6">
              Sign up & get <strong>10% off</strong> your first order!
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
                handleClose();
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button className="bg-rosePink text-white py-2 rounded-full hover:bg-pink-600 transition">
                Subscribe
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
