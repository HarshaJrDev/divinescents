import { useState } from "react";
import { motion } from "framer-motion";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    payment: "cod",
  });

  const cartItems = [
    { name: "Vanilla Bliss Candle", qty: 1, price: 299 },
    { name: "Lavender Calm Candle", qty: 2, price: 249 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Order placed! Thank you for shopping with GlowWick.");
  };

  return (
    <div className="font-poppins bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="fullName"
              placeholder="Full Name"
              required
              className="input"
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="address"
            placeholder="Shipping Address"
            rows={3}
            required
            className="input"
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <input
              name="city"
              placeholder="City"
              required
              className="input"
              onChange={handleChange}
            />
            <input
              name="state"
              placeholder="State"
              required
              className="input"
              onChange={handleChange}
            />
            <input
              name="zip"
              placeholder="ZIP"
              required
              className="input"
              onChange={handleChange}
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <p className="font-medium text-gray-700">Payment Method</p>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={formData.payment === "online"}
                onChange={handleChange}
              />
              <span>Online Payment (Coming Soon)</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-rosePink text-white rounded-xl hover:bg-pink-600 transition"
          >
            Place Order – ₹{total}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-rose-50 rounded-2xl p-6 shadow-md h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <ul className="divide-y">
            {cartItems.map((item, i) => (
              <li key={i} className="py-2 flex justify-between text-gray-700">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.qty * item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4 font-bold text-gray-800 flex justify-between">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
