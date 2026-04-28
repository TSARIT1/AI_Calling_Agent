import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [user, setUser] = useState({
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role"),
  name: localStorage.getItem("employeeId"),
});

  // 🔥 Load from localStorage on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("userName");

    if (token && role) {
      setUser({ token, role, name });
    }
  }, []);

  // ✅ LOGIN
  const login = (token, role, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("employeeId", employeeId);

    setUser({ token, role, employeeId });
  };

  // ✅ LOGOUT (SAFE RESET)
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");

    setUser({
      token: null,
      role: null,
      name: null,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);