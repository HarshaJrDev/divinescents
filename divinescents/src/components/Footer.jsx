import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-rose-100 text-gray-800 pt-10 pb-6 px-6 sm:px-10 mt-10 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-rose-200 pb-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">CandleAura</h2>
          <p className="text-sm">
            Handcrafted candles to light up your moments with warmth, aroma, and love.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-md font-semibold mb-2">Shop</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">All Candles</a></li>
            <li><a href="#">Gift Sets</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Bestsellers</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Info</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-md font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-gray-500">
        © {new Date().getFullYear()} CandleAura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
