import { useStore } from "../context/StoreContext";

const Wishlist = () => {
  const { wishlist } = useStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? <p>No items in wishlist.</p> : (
        <ul className="space-y-4">
          {wishlist.map((item, idx) => (
            <li key={idx} className="border p-4 rounded-xl shadow">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
