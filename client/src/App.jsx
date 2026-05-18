import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Vault from "./pages/Vault/Vault";
import About from "./pages/About/About";
import ScrollToTop from "./util/ScrollToTop";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-asmahan-beige">
      {/* 1. Scrolls to top on every page change */}
      <ScrollToTop />

      {/* 2. Navigation stays at the top */}
      <Nav />

      {/* 3. Main content area that grows to push footer down */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* 4. Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
