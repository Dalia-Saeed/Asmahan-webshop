import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Use a function inside useState to check localStorage only ONCE on startup
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("asmahan_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("asmahan_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("asmahan_user");
  };
  const toggleFavorite = async (productId) => {
    if (!user) {
      alert("Please login to save items to your vault.");
      return;
    }

    try {
      const res = await fetch("/api/auth/toggle-favorite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id, productId }),
      });
      const data = await res.json();
      if (res.ok) {
        // Update user in state and localStorage
        const updatedUser = { ...user, favorites: data.result };
        setUser(updatedUser);
        localStorage.setItem("asmahan_user", JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error("Favorite error:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
