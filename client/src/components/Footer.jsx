import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-asmahan-lightGold/30 pt-16 pb-8 px-8 font-sans text-asmahan-brown">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1 text-center md:text-left">
          <h2 className="text-2xl font-serif tracking-tighter mb-1">Asmahan</h2>
          <p className="text-[9px] tracking-[0.4em] text-asmahan-gold uppercase mb-6">
            Maison De Parfum
          </p>
          <p className="text-xs leading-relaxed opacity-60 italic max-w-xs mx-auto md:mx-0">
            &quot;The art of feminine ritual.&quot; Crafting memories through
            scent and silken textures.
          </p>
        </div>

        {/* Collections Column */}
        <div className="text-center md:text-left">
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-asmahan-gold">
            Collections
          </h4>
          <ul className="text-[11px] space-y-4 opacity-70 uppercase tracking-tighter">
            <li>
              <Link
                to="/products"
                className="hover:text-asmahan-gold transition"
              >
                All Perfumes
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-asmahan-gold transition"
              >
                Royal Bakhoor
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-asmahan-gold transition"
              >
                Beauty Oils
              </Link>
            </li>
          </ul>
        </div>

        {/* Maison Column */}
        <div className="text-center md:text-left">
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-asmahan-gold">
            The Maison
          </h4>
          <ul className="text-[11px] space-y-4 opacity-70 uppercase tracking-tighter">
            <li>
              <Link to="/about" className="hover:text-asmahan-gold transition">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/vault" className="hover:text-asmahan-gold transition">
                Private Vault
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-asmahan-gold transition">
                Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Column */}
        <div className="text-center md:text-left">
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-asmahan-gold">
            Connect
          </h4>
          <div className="flex justify-center md:justify-start space-x-6 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-asmahan-gold transition">
              Instagram
            </a>
            <a href="#" className="hover:text-asmahan-gold transition">
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-asmahan-beige flex flex-col md:flex-row justify-between items-center opacity-40 text-[8px] uppercase tracking-[0.3em]">
        <p>
          &copy; {new Date().getFullYear()} Asmahan Boutique. All Rights
          Reserved.
        </p>
        <p className="mt-2 md:mt-0 font-bold">
          HackYourFuture Graduation Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
