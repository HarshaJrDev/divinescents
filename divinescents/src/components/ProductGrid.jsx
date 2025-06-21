import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

import candle1 from "../assets/Candles/Candles1.jpeg";
import candle2 from "../assets/Candles/WhatsApp Image 2025-06-11 at 11.54.45.jpeg";
import candle3 from "../assets/Candles/WhatsApp Image 2025-06-11 at 11.54.46 (2).jpeg";
import candle4 from "../assets/Candles/WhatsApp Image 2025-06-11 at 11.54.46.jpeg";
import candle5 from "../assets/Candles/WhatsApp Image 2025-06-11 at 11.54.47 (1).jpeg";
import candle6 from "../assets/Candles/WhatsApp Image 2025-06-11 at 11.54.47 (2).jpeg";

const candleProducts = [
  { id: 1, name: "Lavender Breeze Soy Candle", price: 499, image: candle1, tag: "Bestseller" },
  { id: 2, name: "Vanilla Bean Jar Candle", price: 399, image: candle2, tag: "New" },
  { id: 3, name: "Citrus Zest Travel Tin", price: 299, image: candle3, tag: "Limited" },
  { id: 4, name: "Rose Petal Romance Candle", price: 459, image: candle4, tag: "Bestseller" },
  { id: 5, name: "Ocean Mist Scented Votive", price: 349, image: candle5, tag: "" },
  { id: 6, name: "Cinnamon Spice Rustic Candle", price: 429, image: candle6, tag: "Seasonal" },
];

const ProductGrid = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-10 max-w-7xl mx-auto">
      {candleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={() => handleViewDetails(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
