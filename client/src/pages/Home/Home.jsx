import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // Show first 4 items
        setFeaturedProducts(data.result.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  const categories = [
    {
      name: "Perfumes",
      image:
        "https://ounass-ae.atgcdn.ae/contentful/b3xlytuyfm3e/2cod7EipkqHOp7fR8Km8WN/d736d943dcd0f86fd54e89053a11df38/banners-ounass1180x660_-_Rand_yahya.jpg?q=70",
      path: "/products?cat=Perfumes",
    },
    {
      name: "Bakhoor",
      image:
        "https://www.lalamove.com/hs-fs/hubfs/S2%20(1)-Oct-03-2025-11-29-49-5245-AM.jpg?width=2400&height=1600&name=S2%20(1)-Oct-03-2025-11-29-49-5245-AM.jpg",
      path: "/products?cat=Bakhoor",
    },
    {
      name: "Clothing",
      image:
        "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?w=800",
      path: "/products?cat=Clothing",
    },
    {
      name: "Beauty",
      image:
        "https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?w=800",
      path: "/products?cat=Beauty",
    },
  ];

  return (
    <div className="bg-asmahan-beige min-h-screen font-sans text-asmahan-brown">
      {/* 1. HERO SECTION */}
      {/* h-[60vh] on mobile, h-[80vh] on desktop */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden mx-2 md:mx-4 mt-4 rounded-lg shadow-xl">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="relative z-20 text-center text-white px-6">
          {/* Responsive Font: text-4xl on mobile, text-7xl on desktop */}
          <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-lg">
            The art of <br /> <span className="italic">feminine ritual</span>
          </h1>
          <Link
            to="/products"
            className="bg-asmahan-gold text-asmahan-brown px-8 md:px-12 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-white transition duration-500 inline-block shadow-lg"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-asmahan-gold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-3 font-bold">
            Discover
          </p>
          <h2 className="text-3xl md:text-4xl font-serif italic text-asmahan-brown">
            The Collections
          </h2>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="group relative block aspect-[4/5] overflow-hidden bg-white rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-asmahan-brown/30 group-hover:bg-asmahan-brown/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold border-b border-transparent group-hover:border-white transition-all duration-500 pb-1">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED SECTION */}
      <section className="py-16 md:py-20 bg-white/30 backdrop-blur-sm px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif italic">
              Selected for you
            </h2>
            <div className="w-16 md:w-20 h-[1px] bg-asmahan-gold mx-auto mt-4"></div>
          </div>

          {/* Responsive Grid: 1 column on mobile, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {featuredProducts.map((item) => (
              <div key={item._id} className="text-center">
                <div className="aspect-[3/4] overflow-hidden mb-4 shadow-sm border border-asmahan-lightGold/10">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.name}
                  />
                </div>
                <p className="text-asmahan-gold text-[9px] uppercase tracking-widest mb-1 font-bold">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg">{item.name}</h3>
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
