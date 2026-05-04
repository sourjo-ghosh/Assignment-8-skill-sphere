"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "User Profile", href: "/user-profile" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar for Desktop */}
      <nav className="w-11/12 mx-auto my-3 hidden md:flex lg:flex items-center justify-between">
        {/* Right side or logo */}
        <div>
          <h1 className="text-[#2563EB] font-bold text-3xl">SkillSphere</h1>
        </div>
        {/* Navigation Links */}
        <div>
          <ul className="flex gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* User avatar
            <div>
                <img src="https://via.placeholder.com/40" alt="User Avatar" className='w-10 h-10 rounded-full' />
            </div>

             */}
        {/* Right side or Login/Signup */}
        <div>
          <button className="cursor-pointer px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-[#1E40AF] transition-colors duration-300">
            Login
          </button>
          <button className="cursor-pointer ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </nav>
      {/* Navbar for Tablets and Mobile */}
      <nav className="md:hidden lg:hidden w-11/12 mx-auto my-3 flex items-center justify-between">
        <div>
          <h1 className="text-[#2563EB] font-bold text-3xl">SkillSphere</h1>
        </div>
        <div>
          {/* User avatar
            <div>
                <img src="https://via.placeholder.com/40" alt="User Avatar" className='w-10 h-10 rounded-full' />
            </div>

             */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <CiMenuFries size={24} />
            ) : (
              <CiMenuBurger size={24} />
            )}
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4">
              <ul className="flex flex-col gap-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <button className="cursor-pointer w-full mt-4 px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-[#1E40AF] transition-colors duration-300">
                  Login
                </button>
                <button className="cursor-pointer w-full mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300">
                    Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
