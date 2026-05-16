import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clean data before sending to server
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, password: cleanPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.result);
        navigate("/");
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="bg-asmahan-beige min-h-screen flex items-center justify-center p-6 font-sans text-asmahan-brown">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded shadow-xl w-full max-w-md border border-asmahan-lightGold"
      >
        <h2 className="text-4xl font-serif italic mb-10 text-center">Login</h2>

        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-asmahan-gold p-3 outline-none bg-transparent"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-asmahan-gold p-3 outline-none bg-transparent"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-asmahan-brown text-white py-4 mt-12 uppercase tracking-widest text-xs font-bold hover:bg-asmahan-gold hover:text-asmahan-brown transition duration-500"
        >
          Sign In
        </button>

        <p className="mt-8 text-center text-[10px] uppercase tracking-widest opacity-60">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-asmahan-gold font-bold">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
