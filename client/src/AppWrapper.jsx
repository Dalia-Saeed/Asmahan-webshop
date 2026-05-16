import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
// 1. Import the AuthProvider
import { AuthProvider } from "./context/AuthContext";

const AppWrapper = ({ children }) => {
  return (
    /* 2. Wrap EVERYTHING inside AuthProvider */
    <AuthProvider>
      <CartProvider>
        <Router>{children}</Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default AppWrapper;
