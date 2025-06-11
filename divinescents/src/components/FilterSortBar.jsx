import { useState } from "react";
import { FiFilter, FiChevronDown } from "react-icons/fi";

const categories = ["All", "Floral", "Sweet", "Woody", "Fresh"];
const sortOptions = ["Popularity", "Price: Low to High", "Price: High to Low"];

const FilterSortBar = ({ onFilterChange, onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    onFilterChange(cat);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="w-full bg-rose-50 py-4 px-4 sm:px-8 flex flex-col gap-4 sm:flex-row justify-between items-center font-poppins rounded-2xl shadow mb-6">
      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-rosePink text-white"
                : "border-gray-300 text-gray-700"
            } transition whitespace-nowrap`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2">
        <FiFilter className="text-gray-500" />
        <select
          className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-rosePink"
          value={selectedSort}
          onChange={handleSortChange}
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;
