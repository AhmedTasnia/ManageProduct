"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Update user from localStorage whenever it changes
  const updateUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  useEffect(() => {
    // Initial load
    updateUser();

    // Listen to localStorage changes from other tabs/windows
    const handleStorageChange = (e) => {
      if (e.key === "user") updateUser();
    };
    window.addEventListener("storage", handleStorageChange);

    // Listen to custom event in same tab
    const handleUserChange = () => updateUser();
    window.addEventListener("user-changed", handleUserChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("user-changed", handleUserChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setDropdownOpen(false);
    setUser(null);
    window.location.href = "/";
  };

  return (
    <div className="shadow-md bg-[#D6DAC8]">
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center space-x-2">
          <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold">Pen & Paper</span>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn btn-outline bg-[#D6A99D] rounded-4xl text-black"
              >
                {user.name}
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                  <li>
                    <Link
                      href="/dashboard/add-product"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-outline bg-[#D6A99D] rounded-4xl text-black"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
