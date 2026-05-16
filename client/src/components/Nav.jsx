import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-asmahan-beige border-b border-asmahan-lightGold px-8 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/" className="block">
            <h1 className="text-3xl font-serif text-asmahan-brown tracking-tighter">
              Asmahan
            </h1>
            <p className="text-[10px] tracking-[0.4em] text-asmahan-gold uppercase -mt-1">
              Maison De Parfum
            </p>
          </Link>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-10 text-[13px] tracking-[0.2em] text-asmahan-brown uppercase font-medium">
          <li>
            <Link
              to="/"
              className={
                isActive("/")
                  ? "text-asmahan-gold border-b border-asmahan-gold pb-1"
                  : "hover:text-asmahan-gold transition"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={
                isActive("/products")
                  ? "text-asmahan-gold border-b border-asmahan-gold pb-1"
                  : "hover:text-asmahan-gold transition"
              }
            >
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-asmahan-gold transition">
              About
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-[12px] uppercase tracking-widest text-asmahan-brown">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-[10px] uppercase font-bold text-asmahan-gold italic">
                Hello, {user.name}
              </span>
              <button
                onClick={logout}
                className="hover:text-red-800 transition uppercase tracking-tighter"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:opacity-70">
              Login
            </Link>
          )}
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.112 11.5a.75.75 0 0 1-.745.822H4.027a.75.75 0 0 1-.745-.822l1.112-11.5a.75.75 0 0 1 .745-.672h13.242a.75.75 0 0 1 .746.672Z"
              />
            </svg>

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-asmahan-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
