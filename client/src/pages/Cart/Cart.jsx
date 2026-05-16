import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, totalPrice } =
    useCart();

  // 1. EMPTY STATE
  if (cartItems.length === 0) {
    return (
      <div className="bg-asmahan-beige min-h-screen flex flex-col items-center justify-center font-sans text-asmahan-brown">
        <h2 className="text-4xl font-serif italic mb-6">Your vault is empty</h2>
        <Link
          to="/products"
          className="border border-asmahan-brown px-10 py-3 text-xs uppercase tracking-widest hover:bg-asmahan-brown hover:text-white transition duration-500"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  // 2. MAIN CART UI
  return (
    <div className="bg-asmahan-beige min-h-screen py-16 px-8 font-sans text-asmahan-brown">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif italic text-center mb-16">
          Shopping Bag
        </h1>

        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b border-asmahan-lightGold/30 pb-8"
            >
              {/* Product Info */}
              <div className="flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover shadow-sm"
                />
                <div>
                  <p className="text-[10px] text-asmahan-gold uppercase tracking-widest mb-1 font-bold">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl">{item.name}</h3>
                  <p className="text-sm opacity-60">${item.price}.00</p>
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex flex-col items-end space-y-4">
                <div className="flex items-center border border-asmahan-brown/20 px-3 py-1">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="px-2 hover:text-asmahan-gold text-lg"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-2 hover:text-asmahan-gold text-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-[10px] uppercase tracking-widest text-red-800 opacity-60 hover:opacity-100 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 pt-8 border-t-2 border-asmahan-brown flex flex-col items-end">
          <div className="flex justify-between w-full md:w-1/2 mb-8">
            <span className="uppercase tracking-[0.2em] text-sm">
              Total Amount
            </span>
            <span className="font-serif text-2xl font-bold">
              ${totalPrice}.00
            </span>
          </div>
          <button className="w-full md:w-1/2 bg-asmahan-brown text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-asmahan-gold hover:text-asmahan-brown transition duration-500 shadow-xl">
            <Link
              to="/checkout"
              className="w-full md:w-1/2 bg-asmahan-brown text-center text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-asmahan-gold hover:text-asmahan-brown transition duration-500 shadow-xl inline-block"
            >
              Proceed to Checkout
            </Link>
          </button>
          <Link
            to="/products"
            className="mt-6 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition"
          >
            &larr; Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
