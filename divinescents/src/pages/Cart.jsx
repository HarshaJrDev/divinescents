// src/pages/Cart.jsx

import { useStore } from "../context/StoreContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { cart, removeFromCart } = useStore();

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * 83 * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto font-poppins">
      <h1 className="text-3xl font-bold mb-6 text-[#6b4a33]">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">🛒 Your cart is currently empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, idx) => {
            const priceInINR = (item.price * 83).toFixed(2);
            const total = (priceInINR * item.quantity).toFixed(2);

            return (
              <div
                key={idx}
                className="border rounded-xl shadow-lg p-5 flex flex-col md:flex-row gap-6 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-40 h-40 object-cover rounded-lg"
                />

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold text-[#a15e3e]">{item.name}</h2>
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      variant="ghost"
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </Button>
                  </div>

                  <p className="text-gray-700 text-sm">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags?.map((tag) => (
                      <Badge key={tag} className="bg-[#f3c8a9] text-[#6b4a33] hover:bg-[#f9d9a4]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <strong>Price (each):</strong><br />
                      ₹{priceInINR}
                    </div>
                    <div>
                      <strong>Quantity:</strong><br />
                      {item.quantity}
                    </div>
                    <div>
                      <strong>Total:</strong><br />
                      ₹{parseFloat(total).toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Cart total summary */}
          <div className="mt-8 border-t pt-4 text-right">
            <h2 className="text-xl font-semibold text-[#6b4a33]">
              Grand Total: ₹{parseFloat(getTotalPrice()).toLocaleString("en-IN")}
            </h2>
            <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
