"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

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
          <Link href="/">Homes</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Success Stories</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
          <Link
            href="/login"
            className="bg-blue-500 text-white px-14 py-3 rounded-full hover:bg-blue-600 transition-transform duration-200 transform hover:scale-105"
          >
            Login
          </Link>
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-20 text-white text-2xl cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
