import { motion } from "framer-motion";
import candleImg from "../assets/Candles/Candles1.jpeg";
import { FiArrowRight } from "react-icons/fi";
import { FaLeaf, FaHandHoldingHeart, FaGift } from "react-icons/fa";

const featureItems = [
  { icon: <FaLeaf />, label: "Eco-Friendly Wax" },
  { icon: <FaHandHoldingHeart />, label: "Hand-Poured with Love" },
  { icon: <FaGift />, label: "Perfect for Gifting" },
];

const HeroSection = () => {
  return (
    <section className="bg-candleWhite py-16 px-6 md:px-12 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Light Up Your Space<br />
            With <span className="text-rosePink">Handmade Candles</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Discover cozy, fragrant candles crafted with love and pure ingredients.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm text-gray-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <span className="text-rosePink">{item.icon}</span> {item.label}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <button className="bg-rosePink text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition inline-flex items-center gap-2">
            Shop Now <FiArrowRight />
          </button>

          <p className="text-sm text-gray-500 mt-3">Over 10,000 candles sold 🌟</p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={candleImg}
            alt="Candle Display"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
