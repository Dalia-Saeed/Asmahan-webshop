import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Get functions from our Context Brains
  const { addToCart } = useCart();
  const { user, toggleFavorite } = useAuth();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch the collection");
        return res.json();
      })
      .then((data) => {
        setProducts(data.result);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className="bg-asmahan-beige min-h-screen flex items-center justify-center">
        <div className="text-asmahan-gold uppercase tracking-[0.5em] animate-pulse font-sans text-xs">
          Opening the Vault...
        </div>
      </div>
    );
  }

  // 2. ERROR STATE
  if (errorMessage) {
    return (
      <div className="bg-asmahan-beige min-h-screen flex flex-col items-center justify-center p-10">
        <h2 className="text-red-800 font-serif text-2xl mb-4 italic text-center">
          The collection is currently unreachable
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="px-10 py-3 border border-asmahan-brown text-xs uppercase tracking-widest"
        >
          Retry
        </button>
      </div>
    );
  }

  // 3. MAIN SHOP UI
  return (
    <div className="bg-asmahan-beige min-h-screen text-asmahan-brown font-sans">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-20">
          <p className="text-asmahan-gold uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">
            Maison Asmahan
          </p>
          <h1 className="text-6xl font-serif italic text-asmahan-brown leading-tight">
            The Collection
          </h1>
          <div className="w-20 h-[1px] bg-asmahan-gold/50 mx-auto mt-6"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((item) => (
            <div
              key={item._id}
              className="group flex flex-col items-center text-center"
            >
              {/* Image Container with Heart Button */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-6 shadow-sm border border-asmahan-lightGold/10">
                {/* FAVORITE (HEART) BUTTON */}
                <button
                  onClick={() => toggleFavorite(item._id)}
                  className="absolute top-4 right-4 z-30 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={
                      user?.favorites?.includes(item._id) ? "#c5a059" : "none"
                    }
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#c5a059"
                    className="w-5 h-5 transition-colors duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>

                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-asmahan-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <p className="text-asmahan-gold text-[10px] tracking-[0.3em] uppercase mb-2 font-bold">
                {item.category}
              </p>
              <h3 className="font-serif text-xl mb-2 tracking-tight">
                {item.name}
              </h3>
              <p className="text-sm font-light text-asmahan-brown/80 mb-5">
                ${item.price}.00
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(item)}
                className="w-full border border-asmahan-brown/30 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-asmahan-brown hover:text-white transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
