"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    if (auth) {
      auth.logout();
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <Image
        src="/menu.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="fixed inset-0 bg-black text-white w-screen h-screen flex flex-col items-center justify-center gap-8 text-xl z-50">
          <Link href="/" onClick={() => setOpen(false)}>Homes</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/success-stories" onClick={() => setOpen(false)}>Success Stories</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          {auth && auth.userEmail ? (
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-14 py-3 rounded-full hover:bg-blue-600 transition-transform duration-200 transform hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 text-white px-14 py-3 rounded-full hover:bg-blue-600 transition-transform duration-200 transform hover:scale-105"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-20 right-10 text-white text-2xl cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;