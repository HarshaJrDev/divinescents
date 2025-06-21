import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

// Dummy product data (can move to a separate file if needed)
const dummyGifts = [
  {
    id: 1,
    name: "Chocolate Hamper",
    price: 25,
    category: "Chocolates",
    image: "https://via.placeholder.com/300x200?text=Chocolate+Hamper",
  },
  {
    id: 2,
    name: "Rose Candle Gift",
    price: 40,
    category: "Candles",
    image: "https://via.placeholder.com/300x200?text=Rose+Candle+Gift",
  },
  {
    id: 3,
    name: "Festival Mithai Box",
    price: 30,
    category: "Laddus",
    image: "https://via.placeholder.com/300x200?text=Mithai+Box",
  },
  {
    id: 4,
    name: "Custom Card Pack",
    price: 15,
    category: "Cards",
    image: "https://via.placeholder.com/300x200?text=Card+Pack",
  },
  {
    id: 5,
    name: "Luxury Gift Basket",
    price: 55,
    category: "Hampers",
    image: "https://via.placeholder.com/300x200?text=Gift+Basket",
  },
];

const Gifts = () => {
      const navigate = useNavigate(); 
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 60]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filtered = dummyGifts.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1] &&
      (selectedCategory ? item.category === selectedCategory : true)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-poppins">
      <h1 className="text-3xl font-bold mb-6 text-[#6b4a33]">Gift Hampers</h1>

      {/* Filters Section */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Input
          placeholder="Search gifts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-[#f3c8a9] focus:ring-pink-400"
        />

        <Select onValueChange={(value) => setSelectedCategory(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Chocolates">Chocolates</SelectItem>
            <SelectItem value="Candles">Candles</SelectItem>
            <SelectItem value="Laddus">Laddus</SelectItem>
            <SelectItem value="Cards">Cards</SelectItem>
            <SelectItem value="Hampers">Hampers</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-col">
          <span className="text-sm text-[#6b4a33] mb-2">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </span>
          <Slider
            defaultValue={priceRange}
            min={0}
            max={100}
            step={5}
            onValueChange={(val) => setPriceRange(val)}
            className="text-pink-500"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((gift) => (
     <motion.div
    key={gift.id}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => navigate(`/gift/${gift.id}`)} // 👈 Navigate to detail page
    className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden relative transition-all border border-[#f3c8a9]"
  >
    <img src={gift.image} alt={gift.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-[#6b4a33] font-semibold text-lg">{gift.name}</h2>
      <p className="text-sm text-gray-500 mt-1">${gift.price}</p>
    </div>
    <button
      onClick={(e) => {
        e.stopPropagation(); // ❗ prevent click bubbling
        toggleFavorite(gift.id);
      }}
      className={`absolute top-3 right-3 p-1 rounded-full ${
        favorites.includes(gift.id) ? "text-pink-500" : "text-[#6b4a33]"
      } hover:text-pink-600 transition`}
    >
      <Heart
        fill={favorites.includes(gift.id) ? "hotpink" : "none"}
        className="w-5 h-5"
      />
    </button>
  </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filtered.length === 0 && (
        <p className="text-center text-[#6b4a33] mt-8">
          No gifts match your filters.
        </p>
      )}
    </div>
  );
};

export default Gifts;
