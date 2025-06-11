import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const CheckoutModal = ({ isOpen, onClose, cartItems }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white rounded-t-3xl p-6 z-50 font-poppins"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Checkout</h2>
              <button onClick={onClose}>
                <FiX className="text-2xl text-gray-600 hover:text-red-400" />
              </button>
            </div>

            {/* Cart Summary */}
            <div className="mb-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span>{item.name} × {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
              <div className="flex justify-between border-t pt-2 font-semibold">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Form */}
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Order Placed!");
                onClose();
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <textarea
                placeholder="Shipping Address"
                required
                className="w-full border rounded-2xl px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button
                type="submit"
                className="w-full bg-rosePink text-white py-2 rounded-full hover:bg-pink-600 transition"
              >
                Place Order
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
