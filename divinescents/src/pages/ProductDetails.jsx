import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiShoppingCart,
  FiMapPin,
  FiUser ,
  FiCreditCard,
  FiZap,
  FiCheckCircle,
  FiDownload,
  FiStar,
} from "react-icons/fi";
import { useState, useRef } from "react";
import { useStore } from "../context/StoreContext";
import { toast } from "sonner";
import html2pdf from "html2pdf.js";

const ProductDetails = () => {
  const { addToCart, addToWishlist } = useStore();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId] = useState(() => "ORD" + Math.floor(100000 + Math.random() * 900000));
  const invoiceRef = useRef(null);

  if (!product) return <div className="p-6 text-red-500">Product not found.</div>;

  const priceInINR = (product.price * 83).toFixed(2);
  const total = (quantity * priceInINR).toFixed(2);

  const handleBuyNow = () => {
    setOrderPlaced(true);
    toast.success("Order placed successfully!");
  };

  const handleDownloadPDF = () => {
    const element = invoiceRef.current;
    const opt = {
      margin: 0.5,
      filename: `invoice-${orderId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    if (html2pdf && element) {
      html2pdf().set(opt).from(element).save();
    } else {
      toast.error("PDF generator failed. Check html2pdf.js setup.");
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 font-poppins"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {!orderPlaced ? (
        <div className="grid md:grid-cols-2 gap-10">
          <motion.img
            src={product.image}
            alt={product.name}
            className="rounded-2xl shadow-xl w-full object-cover"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#6b4a33]">{product.name}</h1>
            <p className="text-xl text-[#a15e3e] font-semibold">
              ${product.price} / ₹{priceInINR}
            </p>
            <p className="text-gray-700">{product.description}</p>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} className="bg-[#f3c8a9] text-[#6b4a33] hover:bg-[#f9d9a4]">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-4 z-50 relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">Select Quantity</label>
              <Select value={String(quantity)} onValueChange={(val) => setQuantity(Number(val))}>
                <SelectTrigger className="w-32 z-[70] relative">
                  <SelectValue placeholder="Select Quantity" />
                </SelectTrigger>
                <SelectContent className="z-[80]">
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Input
                placeholder="Delivery City (e.g., Delhi)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Textarea
                placeholder="Postal Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => {
                  addToCart({ ...product, quantity });
                  toast.success(`${product.name} added to cart.`);
                }}
                className="bg-[#6b4a33] hover:bg-[#a15e3e] text-white flex items-center gap-2 px-6 py-2 rounded-xl shadow-md"
              >
                <FiShoppingCart /> Add to Cart
              </Button>
              <Button
                onClick={() => {
                  addToWishlist(product);
                  toast(`${product.name} added to wishlist ❤️`);
                }}
                variant="outline"
                className="text-[#a15e3e] border-[#f3c8a9] flex items-center gap-2 px-6 py-2 rounded-xl"
              >
                <FiHeart /> Wishlist
              </Button>
              <Button
                onClick={handleBuyNow}
                className="bg-[#ff8c42] hover:bg-[#ffaf70] text-white flex items-center gap-2 px-6 py-2 rounded-xl shadow"
              >
                <FiZap /> Buy Now
              </Button>
            </div>

            <div className="mt-4 border-t pt-4">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-[#6b4a33] mb-1">
                <FiCreditCard /> Payment Summary
              </h2>
              <p className="text-gray-800">
                <span className="font-medium">Total:</span> ₹{parseFloat(total).toLocaleString("en-IN")}
              </p>
            </div>

            {/* Reviews Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#6b4a33]">Customer Reviews</h2>
              <div className="flex items-center">
                <FiStar className="text-yellow-500" />
                <FiStar className="text-yellow-500" />
                <FiStar className="text-yellow-500" />
                <FiStar className="text-yellow-500" />
                <FiStar className="text-gray-300" />
                <span className="ml-2 text-gray-600">(4.0)</span>
              </div>
              <p className="text-gray-600">"Great product! Highly recommend."</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <motion.div
            ref={invoiceRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-2xl border mt-10 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Logo/Screenshot_2025-06-11_at_6.37.14_PM-removebg-preview.png"
                alt="DivineScents Logo"
                className="h-12 w-auto object-contain"
              />
              <h1 className="text-3xl font-extrabold text-[#6b4a33] tracking-wide">DivineScents</h1>
            </div>

            <div className="flex items-center gap-3 text-green-600 mb-3">
              <FiCheckCircle size={24} />
              <h2 className="text-xl font-semibold">Order Placed Successfully</h2>
            </div>
            <div className="text-sm text-gray-600 mb-2">Order ID: <strong>{orderId}</strong></div>

            <div className="border-t pt-4 space-y-4 text-sm">
              <div className="text-base">
                <h3 className="font-semibold text-[#6b4a33] mb-1">Product:</h3>
                <p>{product.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Price per item:</strong><br /> ₹{priceInINR}
                </div>
                <div>
                  <strong>Quantity:</strong><br /> {quantity}
                </div>
                <div className="col-span-2">
                  <strong>Total Paid:</strong><br />
                  <span className="text-2xl font-semibold text-[#a15e3e]">₹{total}</span>
                </div>
              </div>

              <div className="pt-3">
                <h3 className="font-semibold text-[#6b4a33]">Shipping Details:</h3>
                <p><strong>City:</strong> {location}</p>
                <p><strong>Address:</strong> {address}</p>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500 border-t pt-3 italic">
              This invoice is computer generated. Delivery and tracking details will be sent to your email.
            </div>
          </motion.div>

          <div className="mt-6 text-center">
            <Button
              onClick={handleDownloadPDF}
              className="bg-[#4caf50] hover:bg-[#66bb6a] text-white px-6 py-2 rounded-xl shadow flex gap-2 items-center"
            >
              <FiDownload /> Download Invoice PDF
            </Button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ProductDetails;
