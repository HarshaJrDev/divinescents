import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 font-poppins">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.img
          src="/images/brand-story.jpg"
          alt="Candle making process"
          className="w-full h-auto rounded-3xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="text-rosePink font-semibold">GlowWick</span>, we believe candles are more than fragrance — they’re memories, comfort, and rituals.
            <br /><br />
            Our journey started with a love for slow evenings and self-care. Hand-poured with love, our soy candles are designed to uplift your space while being kind to the earth.
          </p>
          <p className="text-gray-500 text-sm">
            ✨ 100% natural | 🌿 Eco-friendly | 🕯️ Made in India
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandStory;
