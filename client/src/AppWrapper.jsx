import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // <--- Add this

const AppWrapper = ({ children }) => {
  return (
    <CartProvider>
      {" "}
      {/* <--- Add this */}
      <Router>{children}</Router>
    </CartProvider>
  );
};

export default AppWrapper;
