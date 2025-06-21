import { useParams, useNavigate } from "react-router-dom";

const dummyGifts = [
  {
    id: 1,
    name: "Chocolate Hamper",
    price: 25,
    category: "Chocolates",
    image: "https://via.placeholder.com/300x200?text=Chocolate+Hamper",
    description: "A delightful hamper filled with premium chocolates.",
  },
  {
    id: 2,
    name: "Rose Candle Gift",
    price: 40,
    category: "Candles",
    image: "https://via.placeholder.com/300x200?text=Rose+Candle+Gift",
    description: "Scented rose candles to light up special moments.",
  },
  {
    id: 3,
    name: "Festival Mithai Box",
    price: 30,
    category: "Laddus",
    image: "https://via.placeholder.com/300x200?text=Mithai+Box",
    description: "Traditional Indian sweets beautifully packed.",
  },
  {
    id: 4,
    name: "Custom Card Pack",
    price: 15,
    category: "Cards",
    image: "https://via.placeholder.com/300x200?text=Card+Pack",
    description: "A collection of artistic greeting cards.",
  },
  {
    id: 5,
    name: "Luxury Gift Basket",
    price: 55,
    category: "Hampers",
    image: "https://via.placeholder.com/300x200?text=Gift+Basket",
    description: "An elegant basket packed with luxurious gifts.",
  },
];

const GiftDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gift = dummyGifts.find((item) => item.id === parseInt(id));

  if (!gift) {
    return <p className="text-center mt-10 text-red-500">Gift not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-poppins">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-pink-500 underline text-sm"
      >
        ← Back to Gifts
      </button>

      <img
        src={gift.image}
        alt={gift.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-[#6b4a33] mb-2">{gift.name}</h1>
      <p className="text-lg text-gray-500 mb-4">${gift.price}</p>
      <p className="text-md text-[#444] leading-relaxed">{gift.description}</p>
    </div>
  );
};

export default GiftDetails;
