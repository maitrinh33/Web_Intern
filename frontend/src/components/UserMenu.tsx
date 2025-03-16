"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UserMenu() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative flex justify-end p-4">
      {userEmail ? (
        <div className="relative">
          {/* Toggle Dropdown */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="theme-color text-white px-6 py-2 rounded-full hover:bg-indigo-900 transition-transform duration-200 transform hover:scale-105"
          >
            {userEmail}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="theme-color text-white px-14 py-3 rounded-full hover:bg-indigo-900 transition-transform duration-200 transform hover:scale-105"
        >
          Login
        </Link>
      )}
    </div>
  );
}
