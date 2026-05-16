import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

// 1. WE MOVED THIS OUTSIDE THE CHECKOUT COMPONENT
const InputGroup = ({ label, placeholder, type = "text", value, onChange }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-asmahan-brown/70 ml-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-white border border-asmahan-lightGold/30 p-4 outline-none focus:border-asmahan-gold transition shadow-sm rounded-sm"
      required
    />
  </div>
);

const Checkout = () => {
  const { cartItems, totalPrice, setCartItems } = useCart();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    customerName: "",
    address: "",
    city: "",
    phone: "",
  });

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      customerName: details.customerName,
      items: cartItems,
      totalPrice,
      shippingDetails: {
        address: details.address,
        city: details.city,
        phone: details.phone,
      },
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        setCartItems([]); // Clears the cart
        alert("Success! Your order has been placed, " + details.customerName);
        navigate("/");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <div className="bg-asmahan-beige min-h-screen py-16 px-8 font-sans text-asmahan-brown">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT: FORM */}
        <div className="lg:col-span-2">
          <div className="mb-12">
            <h2 className="text-5xl font-serif italic mb-2">Checkout</h2>
            <p className="opacity-60 text-sm tracking-wide text-asmahan-brown">
              Please provide your details below to complete your purchase.
            </p>
          </div>

          <form onSubmit={handlePlaceOrder} className="space-y-8">
            <InputGroup
              label="Full Name"
              placeholder="Enter your name"
              value={details.customerName}
              onChange={(e) =>
                setDetails({ ...details, customerName: e.target.value })
              }
            />

            <InputGroup
              label="Shipping Address"
              placeholder="Street name and house number"
              value={details.address}
              onChange={(e) =>
                setDetails({ ...details, address: e.target.value })
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup
                label="City"
                placeholder="City"
                value={details.city}
                onChange={(e) =>
                  setDetails({ ...details, city: e.target.value })
                }
              />
              <InputGroup
                label="Phone Number"
                placeholder="+31 000 000 000"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-asmahan-brown text-white py-6 uppercase tracking-[0.3em] font-bold mt-10 hover:bg-asmahan-gold hover:text-white transition duration-500 shadow-xl"
            >
              Complete Order &bull; ${totalPrice}.00
            </button>
          </form>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="bg-white/40 p-10 border border-asmahan-lightGold/20 rounded-lg self-start lg:sticky lg:top-32">
          <h3 className="text-xl font-serif italic mb-8 border-b border-asmahan-lightGold/30 pb-4">
            Order Summary
          </h3>
          <div className="space-y-6 mb-10">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between text-sm">
                <span className="opacity-80">
                  {item.name}{" "}
                  <span className="text-[10px] ml-2 font-bold text-asmahan-gold">
                    x{item.quantity}
                  </span>
                </span>
                <span className="font-bold">
                  ${item.price * item.quantity}.00
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-asmahan-brown pt-6 font-bold text-2xl">
            <span className="text-sm uppercase tracking-widest mt-2">
              Total
            </span>
            <span>${totalPrice}.00</span>
          </div>
          <Link
            to="/cart"
            className="block text-center mt-10 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 underline transition"
          >
            Back to Bag
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
