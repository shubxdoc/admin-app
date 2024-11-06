import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem("currentUser")) || null
  );

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
