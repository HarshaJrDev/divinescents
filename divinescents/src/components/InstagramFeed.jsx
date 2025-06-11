import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const photos = [
  "/images/insta1.jpg",
  "/images/insta2.jpg",
  "/images/insta3.jpg",
  "/images/insta4.jpg",
  "/images/insta5.jpg",
  "/images/insta6.jpg",
];

const InstagramFeed = () => {
  return (
    <div className="py-12 px-4 bg-rose-50 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Follow Us on <span className="text-rosePink">Instagram</span>
        </h2>
        <p className="text-gray-600 mb-8">See how our candles brighten real homes 🌸</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {photos.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`Instagram post ${idx + 1}`}
                className="object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <FaInstagram className="text-white text-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
