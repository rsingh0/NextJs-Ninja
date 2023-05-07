import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/next.svg" width={150} height={150} alt=""/>
      </div>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
    </nav>
  );
};

export default Navbar;
