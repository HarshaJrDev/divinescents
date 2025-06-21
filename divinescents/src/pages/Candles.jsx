import { useState } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiFilter } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { products as candles } from "../data/products";

const categories = ["All", "Scented", "Aromatherapy", "Floral", "Fresh"];

const CandleGrid = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState("");

  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredCandles = candles.filter((candle) => {
    const categoryMatch =
      selectedCategory === "All" || candle.category === selectedCategory;
    const priceMatch =
      !priceFilter || candle.price <= parseFloat(priceFilter);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 font-poppins grid md:grid-cols-4 gap-6">
      {/* Sidebar Filters */}
      <div className="col-span-1 space-y-6">
        <div className="flex items-center gap-2 text-[#6b4a33] font-bold text-xl">
          <FiFilter />
          <h2>Filters</h2>
        </div>

        <div>
          <h3 className="font-semibold text-[#6b4a33] mb-2">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block text-left w-full px-3 py-2 rounded-xl ${
                  selectedCategory === cat
                    ? "bg-[#f3c8a9] text-[#6b4a33] font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#6b4a33] mb-2">Max Price</h3>
          <Input
            type="number"
            placeholder="e.g. 20"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="col-span-3 grid md:grid-cols-2 gap-6">
        {filteredCandles.map((candle) => (
          <motion.div
            key={candle.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden relative"
          >
            <img
              src={`${candle.image}?auto=format&fit=crop&w=600&q=80`}
              alt={candle.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#6b4a33]">
                  {candle.name}
                </h3>
                <button
                  onClick={() => toggleFavorite(candle.id)}
                  className={`text-xl ${
                    favorites.includes(candle.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                >
                  <FiHeart />
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Category: {candle.category}
              </p>
              <p className="text-[#a15e3e] font-semibold text-lg">
                ${candle.price.toFixed(2)}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {candle.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-[#f3c8a9] text-[#6b4a33] text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                onClick={() => navigate(`/product/${candle.id}`)}
                className="mt-4 w-full bg-[#6b4a33] hover:bg-[#a15e3e] text-white rounded-xl shadow"
              >
                View Details
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CandleGrid;
