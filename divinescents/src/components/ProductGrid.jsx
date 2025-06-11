import ProductCard from "./ProductCard";
import candleImg from "../assets/WhatsApp Image 2025-06-11 at 11.54.45.jpeg"; // replace with your actual image

const candleProducts = [
  {
    id: 1,
    name: "Lavender Breeze Soy Candle",
    price: 499,
    image: "../../public/Candles/Candles1.jpeg",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Vanilla Bean Jar Candle",
    price: 399,
    image: "../../public/Candles/WhatsApp Image 2025-06-11 at 11.54.45.jpeg",
    tag: "New",
  },
  {
    id: 3,
    name: "Citrus Zest Travel Tin",
    price: 299,
    image: "../../public/Candles/WhatsApp Image 2025-06-11 at 11.54.46 (2).jpeg",
    tag: "Limited",
  },
  {
    id: 4,
    name: "Rose Petal Romance Candle",
    price: 459,
    image: "../../public/Candles/WhatsApp Image 2025-06-11 at 11.54.46.jpeg",
    tag: "Bestseller",
  },
  {
    id: 5,
    name: "Ocean Mist Scented Votive",
    price: 349,
    image: "../../public/Candles/WhatsApp Image 2025-06-11 at 11.54.47 (1).jpeg",
    tag: "",
  },
  {
    id: 6,
    name: "Cinnamon Spice Rustic Candle",
    price: 429,
    image: "../../public/Candles/WhatsApp Image 2025-06-11 at 11.54.47 (2).jpeg",
    tag: "Seasonal",
  },
];


const ProductGrid = ({  onAddToCart }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-10 max-w-7xl mx-auto">
      {candleProducts.map((product, idx) => (
        <ProductCard key={idx} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
