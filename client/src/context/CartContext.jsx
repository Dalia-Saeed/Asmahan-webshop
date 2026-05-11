import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item already exists
      const isItemInCart = prevItems.find((item) => item._id === product._id);

      if (isItemInCart) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // If it's a new item, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove entire item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId),
    );
  };

  // Decrease quantity of an item
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      const itemToUpdate = prevItems.find((item) => item._id === productId);

      // If quantity is 1, remove it. Otherwise, subtract 1.
      if (itemToUpdate.quantity === 1) {
        return prevItems.filter((item) => item._id !== productId);
      } else {
        return prevItems.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  // Total price calculation
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      /* ADDED decreaseQuantity HERE */
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart easily
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
