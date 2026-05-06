"use client";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
// import { useSession } from "@/app/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(pathName);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "User Profile", href: "/user-profile" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const session = useSession()
  // console.log(session)
  const { data: session } = authClient.useSession();
  const userName = session?.user?.name; // "Joy Ghosh"
  // const userEmail = session?.user?.email; // "joyg03426@gmail.com"
  const userPhoto = session?.user?.image; // photo URL

  return (
    <>
      {/* Navbar for Desktop */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="w-11/12 mx-auto py-4 hidden md:flex lg:flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/">
              <h1 className="text-blue-600 font-bold text-3xl hover:text-blue-700 transition-colors">
                SkillSphere
              </h1>
            </Link>
          </div>
          {/* Navigation Links */}
          <div>
            <ul className="flex gap-8 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${pathName === link.href ? "underline font-semibold text-blue-800" : "text-gray-700"}  hover:text-blue-600 transition-colors duration-300`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* User avatar */}

          {/* Right side or Login/Signup */}
          {session ? (
            <div className="flex justify-center items-center gap-2">
              <Image
                src={userPhoto}
                alt={userName}
                height={30}
                width={30}
                className="rounded-full"
              ></Image>
              <p className="text-black">{userName}</p>
              <button
                onClick={() => authClient.signOut()}
                className="px-6 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/auth/login">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Login
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="px-6 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition-colors duration-300">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Navbar for Tablets and Mobile */}
      <nav className="md:hidden lg:hidden w-full bg-white border-b border-gray-200">
        <div className="w-11/12 mx-auto py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-blue-600 font-bold text-2xl hover:text-blue-700 transition-colors">
              SkillSphere
            </h1>
          </Link>
          <div className="flex justify-center items-center gap-5">
            {session && (
              <Image
                src={userPhoto}
                alt={userName}
                height={30}
                width={30}
                className="rounded-full"
              ></Image>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaXmark size={24} /> : <BiMenu size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white">
            <div className="w-11/12 mx-auto py-4 space-y-4">
              <ul className="flex flex-col gap-4 text-base font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`${pathName === link.href ? "underline font-semibold text-blue-800" : "text-gray-700"}  hover:text-blue-600 transition-colors duration-300`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Link href="/auth/login" className="w-full">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Login
                  </button>
                </Link>
                <Link href="/auth/signup" className="w-full">
                  <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition-colors duration-300">
                    Sign Up
                  </button>
                </Link>
              </div> */}
              {session ? (
                <div className="flex justify-center items-center gap-2">
                  <p className="text-black">
                    Hello,{" "}
                    <span className="text-blue-700 text-xl">
                      {userName}
                    </span>{" "}
                  </p>
                  <button
                    onClick={() => authClient.signOut()}
                    className="px-6 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Link href="/auth/login">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                      Login
                    </button>
                  </Link>
                  <Link href="/auth/signup">
                    <button className="px-6 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-100 transition-colors duration-300">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

// {
//     "session": {
//         "expiresAt": "2026-05-11T22:32:19.612Z",
//         "token": "ppMUwk1mHQruk4DFHR6eBw2xkES5ApZy",
//         "createdAt": "2026-05-04T22:32:19.613Z",
//         "updatedAt": "2026-05-04T22:32:19.613Z",
//         "ipAddress": "0000:0000:0000:0000:0000:0000:0000:0000",
//         "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
//         "userId": "69f91d84682589b23097d5a8",
//         "id": "69f91e73682589b23097d5af"
//     },
//     "user": {
//         "name": "Joy Ghosh",
//         "email": "joyg03426@gmail.com",
//         "emailVerified": false,
//         "image": "https://fdgdfsgfdsg.com",
//         "createdAt": "2026-05-04T22:28:20.169Z",
//         "updatedAt": "2026-05-04T22:28:20.169Z",
//         "id": "69f91d84682589b23097d5a8"
//     }
// }
