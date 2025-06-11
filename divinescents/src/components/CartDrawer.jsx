import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiTrash2 } from "react-icons/fi";

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 p-6 shadow-xl font-poppins overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
              <button onClick={onClose}>
                <FiX size={24} className="text-gray-500 hover:text-rosePink" />
              </button>
            </div>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 mb-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-rosePink font-semibold">₹{item.price * item.qty}</p>
                        <button onClick={() => onRemove(index)}>
                          <FiTrash2 className="text-gray-400 hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal & Checkout */}
                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-rosePink text-white py-2 rounded-full hover:bg-pink-600 transition">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
