"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import Menu from "./Menu";
import Button from "./Button";
import Notification from "./Notification";

const Navbar = () => {
  const navLinks = [
    { name: "Homes", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const auth = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logoutNoti, setLogoutNoti] = useState(false);

  if (!auth) return null;
  const handleLogout = () => {
    auth.logout();
    setLogoutNoti(true);

    // Hide notification after 3 seconds
    setTimeout(() => setLogoutNoti(false), 3000);
  };


  return (
    <nav className="h-20 px-4 md:px-8 lg:my-8 lg:px-16 xl:px-16 2xl:px-64 relative">
      {/* Logout Notification */}
      {logoutNoti && <Notification type="success" message="Logged out successfully!" />}

      {/* MOBILE & TABLET */}
      <div className="h-full flex items-center justify-between lg:hidden">
        <Link href="/">
          <div className="md:text-5xl text-3xl nav-font font-extrabold tracking-wide">
            HEKATE
          </div>
        </Link>
        <Menu />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center">
            <div className="text-5xl nav-font tracking-wide">HEKATE</div>
          </Link>

          <div className="relative flex items-center space-x-4">
            {auth.userEmail ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"
                >
                  <span className="mr-2">{auth.userEmail}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 w-30 mt-0.5 bg-blue-400 rounded-full shadow-lg overflow-hidden z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-right px-5 py-2 text-white hover:bg-blue-500 cursor-pointer"
                    >
                      Logout ➾
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="login-btn text-white px-14 py-3 rounded-full transition-transform duration-200 transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center font-bold justify-center gap-8 h-full mt-4">
          <div className="hidden xl:flex gap-10">
            {navLinks.map((link) => (
              <Button key={link.path} name={link.name} path={link.path} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
