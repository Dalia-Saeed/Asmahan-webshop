import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clean the data to prevent "Invalid Credentials" errors
    const cleanedData = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password.trim(),
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully! Please login.");
        navigate("/login");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Could not connect to the server.");
    }
  };

  return (
    <div className="bg-asmahan-beige min-h-screen flex items-center justify-center p-6 font-sans text-asmahan-brown">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded shadow-xl w-full max-w-md border border-asmahan-lightGold"
      >
        <h2 className="text-3xl font-serif italic mb-8 text-center">
          Create Account
        </h2>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-asmahan-gold p-3 outline-none bg-transparent"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-asmahan-gold p-3 outline-none bg-transparent"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-asmahan-gold p-3 outline-none bg-transparent"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-asmahan-brown text-white py-4 mt-10 uppercase tracking-widest text-xs font-bold hover:bg-asmahan-gold hover:text-asmahan-brown transition duration-500"
        >
          Register
        </button>

        <p className="mt-6 text-center text-xs opacity-60">
          Already have an account?{" "}
          <Link to="/login" className="text-asmahan-gold font-bold">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
