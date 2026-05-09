import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data.result.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  // Category Data
  const categories = [
    {
      name: "Perfumes",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800",
      path: "/products",
    },
    {
      name: "Bakhoor",
      image:
        "https://images.unsplash.com/photo-1602166542330-36653866504b?q=80&w=800",
      path: "/products",
    },
    {
      name: "Clothing",
      image:
        "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800",
      path: "/products",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bf87a931be?q=80&w=800",
      path: "/products",
    },
  ];

  return (
    <div className="bg-asmahan-beige min-h-screen font-sans text-asmahan-brown">
      {/* 1. HERO SECTION (Already done) */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mx-4 mt-4 rounded-lg shadow-xl">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl font-serif mb-6 leading-tight">
            The art of <br /> <span className="italic">feminine ritual</span>
          </h1>
          <Link
            to="/products"
            className="bg-asmahan-gold text-asmahan-brown px-10 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white transition duration-500 inline-block"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION (NEW) */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-asmahan-gold uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">
            Discover
          </p>
          <h2 className="text-4xl font-serif italic text-asmahan-brown">
            The Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="group relative block aspect-[4/5] overflow-hidden bg-white"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              {/* Dark overlay that appears on hover */}
              <div className="absolute inset-0 bg-asmahan-brown/20 group-hover:bg-asmahan-brown/40 transition-colors duration-500"></div>

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] font-bold border-b border-transparent group-hover:border-white transition-all duration-500 pb-1">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED SECTION */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif italic">Selected for you</h2>
            <div className="w-20 h-[1px] bg-asmahan-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((item) => (
              <div key={item._id} className="text-center">
                <div className="aspect-[3/4] overflow-hidden mb-4 shadow-sm border border-asmahan-lightGold/10">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.name}
                  />
                </div>
                <p className="text-asmahan-gold text-[9px] uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="font-serif text-md">{item.name}</h3>
                <p className="text-xs opacity-60 mt-1">${item.price}.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
