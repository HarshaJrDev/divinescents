import { motion } from "framer-motion";
import candleImg from "../assets/WhatsApp Image 2025-06-11 at 11.54.45.jpeg"; // replace with your actual image

const FeaturedCandle = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-rose-50 via-white to-pink-50 py-16 px-4 sm:px-8 lg:px-20 font-poppins rounded-3xl my-10 shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <div className="w-full h-auto">
          <img
            src={candleImg}
            alt="Featured Candle"
            className="rounded-3xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Candle of the Month ✨
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Introducing <strong>“Blush Rosewood”</strong> — a blend of floral sweetness and warm woody undertones. Hand-poured with natural soy wax for a long-lasting burn and a cozy, inviting ambiance.
          </p>
          <p className="text-2xl font-semibold text-rose-600 mb-6">₹399</p>
          <button className="bg-rose-600 hover:bg-rose-700 transition px-6 py-3 text-white rounded-full font-medium shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCandle;
