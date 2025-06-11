import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      className="bg-[#FFF9F5] rounded-2xl border border-[#F4E6E1] shadow-sm overflow-hidden group transition-all duration-300 font-poppins hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-[#EFA9A4] text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm tracking-wide uppercase font-semibold">
            {product.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-[#4B2E2E] leading-snug line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between text-sm">
          <p className="text-[#D17878] font-bold text-md">₹{product.price}</p>
          <span className="bg-[#FCE8E6] text-[#D17878] px-2 py-0.5 rounded-full font-medium text-xs">
            Incl. all taxes
          </span>
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={() => onAddToCart(product)}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#D17878] text-white rounded-full hover:bg-[#c46b6b] transition duration-300 font-medium shadow-sm"
        >
          <FiShoppingCart className="text-lg group-hover:scale-110 transition-transform duration-300" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
