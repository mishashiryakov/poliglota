"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="h-full flex gap-12 items-center justify-center px-8  shadow-md">
      <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
        Home
      </Link>
      <Link
        href="/dictionary"
        className={pathname === "/dictionary" ? "font-bold" : ""}
      >
        Dictionary
      </Link>
    </nav>
  );
};
