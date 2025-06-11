import { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from 'react-icons/fi';
import { GiChocolateBar, GiLoincloth } from 'react-icons/gi';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-[#fcefd4] via-[#f9d9a4] to-[#f3c8a9] shadow-md p-4 sticky top-0 z-50 font-poppins">
        <div className="container mx-auto flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#6b4a33] hover:text-[#a15e3e]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-[#6b4a33] font-semibold text-sm">
            <Link to="/gifts" className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300">
              <FiGift /> <span>Gift Hampers</span>
            </Link>
            <Link to="/candles" className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300">
              <FiCoffee /> <span>Candles</span>
            </Link>
            <Link to="/chocolates" className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300">
              <GiChocolateBar /> <span>Chocolates</span>
            </Link>
            <Link to="/laddus" className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300">
              <GiLoincloth /> <span>Laddus</span>
            </Link>
            <Link to="/cards" className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300">
              <FiEdit /> <span>Custom Cards</span>
            </Link>
            <Link to="/custom-products" className="flex items-center space-x-1 hover:text-[#a15e3e] transition-colors duration-300">
              <FiBox /> <span>Custom Products</span>
            </Link>
          </div>

          {/* Logo/Brand Centered */}
          <div className="flex-grow flex justify-center">
            <Link to="/" aria-label="Home" className="text-xl font-bold text-[#6b4a33] tracking-wide">
              {/* Replace with logo */}
              <span className="select-none">CustomCandles</span>
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 text-[#6b4a33]">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
              className="hover:text-[#a15e3e] transition-colors duration-300"
            >
              <FiSearch className="w-6 h-6" />
            </button>
            <Link to="/cart" aria-label="Shopping Cart" className="hover:text-[#a15e3e] transition-colors duration-300">
              <FiShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/favorites" aria-label="Favorites" className="hover:text-[#a15e3e] transition-colors duration-300">
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link to="/account" aria-label="User Account" className="hover:text-[#a15e3e] transition-colors duration-300">
              <FiUser className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 px-4 space-y-4 text-[#6b4a33] font-semibold text-sm">
            <Link to="/gifts" className="flex items-center space-x-2 hover:text-[#a15e3e]">
              <FiGift /> <span>Gift Hampers</span>
            </Link>
            <Link to="/candles" className="flex items-center space-x-2 hover:text-[#a15e3e]">
              <FiCoffee /> <span>Candles</span>
            </Link>
            <Link to="/chocolates" className="flex items-center space-x-2 hover:text-[#a15e3e]">
              <GiChocolateBar /> <span>Chocolates</span>
            </Link>
            <Link to="/laddus" className="flex items-center space-x-2 hover:text-[#a15e3e]">
              <GiLoincloth /> <span>Laddus</span>
            </Link>
            <Link to="/cards" className="flex items-center space-x-2 hover:text-[#a15e3e]">
              <FiEdit /> <span>Custom Cards</span>
            </Link>
            <Link to="/custom-products" className="flex items-center space-x-2 hover:text-[#a15e3e]">
              <FiBox /> <span>Custom Products</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
