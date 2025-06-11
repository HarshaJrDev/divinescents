import { motion } from "framer-motion";
import {
  GiCandles,
  GiWrappedSweet,
  GiLotus,
  GiSparkles,
} from "react-icons/gi";
import { MdSpa, MdStar, MdCardGiftcard } from "react-icons/md";

const categories = [
  {
    name: "Aromatherapy",
    icon: <MdSpa />,
    color: "from-pink-100 to-pink-200",
  },
  {
    name: "Gift Sets",
    icon: <MdCardGiftcard />,
    color: "from-yellow-100 to-yellow-200",
  },
  {
    name: "Scented Candles",
    icon: <GiCandles />,
    color: "from-rose-100 to-rose-200",
  },
  {
    name: "Festive Specials",
    icon: <GiWrappedSweet />,
    color: "from-purple-100 to-purple-200",
  },
  {
    name: "Decorative",
    icon: <GiLotus />,
    color: "from-green-100 to-green-200",
  },
  {
    name: "Best Sellers",
    icon: <MdStar />,
    color: "from-orange-100 to-orange-200",
  },
  {
    name: "Mystical Glow",
    icon: <GiSparkles />,
    color: "from-indigo-100 to-indigo-200",
  },
];

const CategoryCarousel = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-[#fff5f0] via-[#fff9f6] to-[#fff] font-poppins">
      <h2 className="text-3xl font-bold text-center text-rose-700 mb-8 tracking-tight">
        🌸 Shop by Category
      </h2>

      <motion.div
        className="flex gap-6 overflow-x-auto no-scrollbar px-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={index}
            className={`flex flex-col items-center min-w-[140px] p-5 rounded-2xl bg-gradient-to-br ${category.color} text-rose-700 shadow-md hover:shadow-lg hover:text-rose-800 transition-transform duration-300`}
            whileHover={{ scale: 1.08 }}
          >
            <div className="text-4xl mb-3 animate-bounce-slow">{category.icon}</div>
            <span className="text-sm text-center font-semibold leading-tight">
              {category.name}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoryCarousel;
