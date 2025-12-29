import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Login
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser);
      localStorage.setItem("user", JSON.stringify(storedUser));
      return true;
    }
    return false;
  };

  // Signup
  const signup = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
