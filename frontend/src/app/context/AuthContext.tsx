"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setUserEmail(storedEmail);
  }, []);

  const login = (email: string) => {
    localStorage.setItem("userEmail", email);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
