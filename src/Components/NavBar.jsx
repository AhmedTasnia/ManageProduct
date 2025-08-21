import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="shadow-md">
      <div className="navbar bg-[#D6DAC8] px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-black transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition-colors">
                About Us
              </Link>
            </li>
            </ul>
          </div>
          <a className="text-2xl font-bold ml-2">
            <Image
              src={"/assets/logo.svg"}
              alt="Logo"
              width={40}
              height={40}
            />
          </a>
          <a className="text-2xl font-bold ml-2">Pen & Paper</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-black transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>


        {/* Navbar End */}
        <div className="navbar-end">
          <a className="btn btn-outline bg-[#D6A99D] rounded-4xl  text-black transition">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
