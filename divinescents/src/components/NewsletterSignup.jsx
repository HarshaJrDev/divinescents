import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`🎉 Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-rose-100 text-gray-800 py-14 px-4 sm:px-8 lg:px-20 rounded-3xl my-12 shadow-xl font-poppins"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Join Our Candle Circle</h2>
        <p className="mb-6 text-gray-700">
          Get early access to launches, exclusive discounts, and cozy inspiration.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
        >
          <div className="relative w-full sm:w-auto sm:flex-1">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-10 pr-4 py-3 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-rosePink"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-rosePink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;
