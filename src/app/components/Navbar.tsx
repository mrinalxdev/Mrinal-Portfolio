import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div>
        <div />
        <span>Portfolio</span>
      </div>
      <div>
        <Link href="#">Home</Link>
        <Link href="#">Blogs</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
