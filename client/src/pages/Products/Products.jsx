import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // We fetch directly from the proxy /api/products
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch the collection");
        return res.json();
      })
      .then((data) => {
        // We know from your screenshot the data is in data.result
        setProducts(data.result);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-asmahan-beige min-h-screen flex items-center justify-center">
        <div className="text-asmahan-gold uppercase tracking-[0.5em] animate-pulse font-sans text-xs">
          Opening the Vault...
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="bg-asmahan-beige min-h-screen flex flex-col items-center justify-center p-10">
        <h2 className="text-red-800 font-serif text-2xl mb-4 italic">
          Connection Issue
        </h2>
        <p className="text-asmahan-brown/60 text-sm mb-6">{errorMessage}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-10 py-3 border border-asmahan-brown text-xs uppercase tracking-widest"
        >
          Retry
        </button>
      </div>
    );
  }

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
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-6 shadow-sm border border-asmahan-lightGold/10">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-asmahan-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <p className="text-asmahan-gold text-[10px] tracking-[0.3em] uppercase mb-2 font-bold">
                {item.category}
              </p>
              <h3 className="font-serif text-xl mb-2 tracking-tight">
                {item.name}
              </h3>
              <p className="text-sm font-light text-asmahan-brown/80 mb-5">
                ${item.price}.00
              </p>

              <button className="w-full border border-asmahan-brown/30 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-asmahan-brown hover:text-white transition-colors duration-500">
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
