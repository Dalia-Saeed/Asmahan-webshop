import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const [isMenuOpen, setIsOpen] = useState(false); // State for dropdown
  const location = useLocation();
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-asmahan-beige border-b border-asmahan-lightGold px-4 md:px-8 py-4 md:py-6 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 1. MOBILE MENU BUTTON (Visible only on small screens) */}
        <button
          onClick={() => setIsOpen(!isMenuOpen)}
          className="md:hidden text-asmahan-brown focus:outline-none"
        >
          {isMenuOpen ? (
            /* Close Icon */
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Menu Icon */
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* 2. LOGO */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-xl md:text-3xl font-serif text-asmahan-brown tracking-tighter">
              Asmahan
            </h1>
            <p className="text-[7px] md:text-[10px] tracking-[0.4em] text-asmahan-gold uppercase -mt-1">
              Maison De Parfum
            </p>
          </Link>
        </div>

        {/* 3. DESKTOP LINKS (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-10 text-[13px] tracking-[0.2em] text-asmahan-brown uppercase font-medium">
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
            <Link
              to="/about"
              className={
                isActive("/about")
                  ? "text-asmahan-gold border-b border-asmahan-gold pb-1"
                  : "hover:text-asmahan-gold transition"
              }
            >
              About
            </Link>
          </li>
        </ul>

        {/* 4. ICONS (Always visible) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/vault" className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isActive("/vault") ? "#c5a059" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Link>

          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.112 11.5a.75.75 0 0 1-.745.822H4.027a.75.75 0 0 1-.745-.822l1.112-11.5a.75.75 0 0 1 .745-.672h13.242a.75.75 0 0 1 .746.672Z"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-asmahan-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* 5. MOBILE DROPDOWN OVERLAY (Only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-asmahan-lightGold shadow-xl animate-fadeIn">
          <ul className="flex flex-col p-8 space-y-6 text-sm uppercase tracking-[0.2em] font-medium text-asmahan-brown">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsOpen(false)}>
                Shop Collection
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                Our Story
              </Link>
            </li>
            <li className="pt-4 border-t border-asmahan-beige">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="text-red-800"
                >
                  Logout ({user.name})
                </button>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Member Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
