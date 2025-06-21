import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleViewDetails = () => {
    onViewDetails();
  };

  return (
    <>
      {/* Only include Toaster once in the app, move this to your App.jsx/tsx or layout later */}
      <Toaster richColors position="top-right" />

      <div className="bg-white shadow-md rounded-xl overflow-hidden p-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h3 className="font-semibold text-lg text-[#6b4a33]">{product.name}</h3>
          <p className="text-[#a15e3e] font-medium">₹{product.price}</p>
          {product.tag && (
            <span className="inline-block bg-[#f3c8a9] text-[#6b4a33] text-xs px-2 py-1 mt-1 rounded-full">
              {product.tag}
            </span>
          )}
          <div className="mt-4 flex flex-col gap-2">
            <Button onClick={handleViewDetails} className="w-full bg-[#6b4a33] text-white">
              View Details
            </Button>
            <Button
              onClick={handleAddToCart}
              className="w-full border border-[#6b4a33] text-[#6b4a33] hover:bg-[#f3c8a9]"
              variant="outline"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
