import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-7 h-7 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold text-white">Me</span>
      </div>
      <div className="flex gap-12 text-[16px] pr-1 text-white">
        <Link href="#" className="text-white font-medium">Home</Link>
        <Link href="#">Blogs</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
