import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiHeart,
  FiMenu,
  FiX,
  FiGift,
  FiCoffee,
  FiBox,
  FiEdit,
} from "react-icons/fi";
import { GiChocolateBar, GiLoincloth } from "react-icons/gi";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-[#fcefd4] via-[#f9d9a4] to-[#f3c8a9] shadow-md p-4 sticky top-0 z-40 font-poppins">
        <div className="container mx-auto flex items-center justify-between">
          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#6b4a33] hover:text-[#a15e3e]"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-[#6b4a33] font-semibold text-sm">
            <NavLink to="/gifts" icon={<FiGift />} label="Gift Hampers" />
            <NavLink to="/candles" icon={<FiCoffee />} label="Candles" />
            <NavLink to="/chocolates" icon={<GiChocolateBar />} label="Chocolates" />
            <NavLink to="/laddus" icon={<GiLoincloth />} label="Laddus" />
            <NavLink to="/cards" icon={<FiEdit />} label="Custom Cards" />
            <NavLink to="/custom-products" icon={<FiBox />} label="Custom Products" />
          </div>

          {/* Logo */}
          <div className="flex-grow flex justify-center">
            <Link to="/" className="flex justify-center">
              <img
                src="../../public/Logo/Screenshot_2025-06-11_at_6.37.14_PM-removebg-preview.png"
                className="h-12"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 text-[#6b4a33]">
            <button onClick={() => setIsSearchOpen(true)} aria-label="Open Search">
              <FiSearch className="w-6 h-6 hover:text-[#a15e3e]" />
            </button>
            <NavIcon to="/cart" icon={<FiShoppingCart />} />
            <NavIcon to="/favorites" icon={<FiHeart />} />
            <NavIcon to="/account" icon={<FiUser />} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 px-4 space-y-4 text-[#6b4a33] font-semibold text-sm">
            <NavLink to="/gifts" icon={<FiGift />} label="Gift Hampers" />
            <NavLink to="/candles" icon={<FiCoffee />} label="Candles" />
            <NavLink to="/chocolates" icon={<GiChocolateBar />} label="Chocolates" />
            <NavLink to="/laddus" icon={<GiLoincloth />} label="Laddus" />
            <NavLink to="/cards" icon={<FiEdit />} label="Custom Cards" />
            <NavLink to="/custom-products" icon={<FiBox />} label="Custom Products" />
          </div>
        )}
      </nav>

      {/* 🔍 Neon Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            key="search-modal"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#fff6ec] rounded-xl shadow-xl p-6 w-full max-w-md mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-3 right-3 text-[#a15e3e]"
              >
                <FiX className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search products, categories..."
                className="w-full px-4 py-2 rounded-md text-[#6b4a33] bg-white border border-[#f3c8a9] outline-none focus:ring-2 focus:ring-pink-400 shadow-[0_0_15px_#ff69b4]"
                autoFocus
              />
              <div className="mt-4 text-sm text-[#6b4a33] space-y-1">
                <p className="font-semibold">Popular:</p>
                <div className="flex gap-2 flex-wrap">
                  {["Chocolate Box", "Gift Hamper", "Rose Candle", "Mithai", "Custom Message"].map(
                    (item) => (
                      <span
                        key={item}
                        className="bg-[#fcefd4] px-3 py-1 rounded-full text-xs shadow hover:bg-[#f3c8a9] transition"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300"
  >
    {icon} <span>{label}</span>
  </Link>
);

const NavIcon = ({ to, icon }) => (
  <Link to={to} className="hover:text-[#a15e3e] transition-colors duration-300">
    {icon}
  </Link>
);

export default Navbar;
