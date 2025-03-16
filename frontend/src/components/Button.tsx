"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface ButtonProps {
  name: string;
  path: string;
}

export default function Button({ name, path }: ButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <button className={`custom-button ${isActive ? "active" : ""}`}>
        <span className="dot"></span>
        {name}
      </button>
    </Link>
  );
}
