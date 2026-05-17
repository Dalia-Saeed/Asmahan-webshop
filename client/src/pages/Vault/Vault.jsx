import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vault = () => {
  const { user, toggleFavorite } = useAuth();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch all products from the backend
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // 2. Filter: Keep only products whose ID is in the user's favorites list
        const filtered = data.result.filter((product) =>
          user?.favorites?.includes(product._id),
        );
        setFavoriteItems(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user?.favorites]); // Re-run if user likes/unlikes something

  if (loading)
    return (
      <div className="text-center py-20 bg-asmahan-beige min-h-screen font-serif">
        Opening your vault...
      </div>
    );

  return (
    <div className="bg-asmahan-beige min-h-screen py-16 px-8 text-asmahan-brown font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-asmahan-gold uppercase tracking-widest text-[10px] font-bold">
            Your Private Selection
          </p>
          <h1 className="text-5xl font-serif italic">The Favorites</h1>
          <div className="w-20 h-[1px] bg-asmahan-gold/40 mx-auto mt-6"></div>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif italic text-xl opacity-50 mb-8">
              Your vault is currently empty.
            </p>
            <Link
              to="/products"
              className="px-10 py-3 border border-asmahan-brown text-[10px] uppercase tracking-widest hover:bg-asmahan-brown hover:text-white transition-all"
            >
              Go to Store
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favoriteItems.map((item) => (
              <div key={item._id} className="text-center group">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4 shadow-sm border border-asmahan-lightGold/10">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    alt={item.name}
                  />

                  {/* Heart button to "un-favorite" */}
                  <button
                    onClick={() => toggleFavorite(item._id)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#c5a059"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                </div>
                <h3 className="font-serif text-lg">{item.name}</h3>
                <p className="text-asmahan-gold text-sm">${item.price}.00</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Vault;
