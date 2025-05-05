"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container bg-indigo-600 mx-auto py-3 px-5 flex justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <Image
          src="vercel.svg"
          alt="mainlogo"
          className="text-black ml-2"
          width={30}
          height={30}
        ></Image>
      </div>

      {/* Menus */}
      <div className="hidden md:flex lg:flex space-x-4 text-white">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* social icons */}

      <div className="flex space-x-2">
        <HiOutlineUser className="text-white w-5 h-5" />
        <HiOutlineShoppingBag className="text-white w-5 h-5" />
        <button onClick={toggleMobileDrawer}>
          <HiBars3BottomRight className="text-white w-5 h-5 md:hidden lg:hidden" />
        </button>
      </div>

      <div
        className={`fixed top-0 p-6 left-0 h-full flex flex-col  w-2/4 sm:w-1/2  md:w-1/4 bg-white transition transform  duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="flex justify-end">
          <button className="cursor-pointer" onClick={toggleMobileDrawer}>
            <HiMiniXMark size={18} />
          </button>
        </div>

        {/* mobile menues */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              href="#"
              onClick={toggleMobileDrawer}
              className="block text-gray-500 hover:text-black"
            >
              Men
            </Link>

            <Link
              href="#"
              onClick={toggleMobileDrawer}
              className="block text-gray-500 hover:text-black"
            >
              Women
            </Link>

            <Link
              href="#"
              onClick={toggleMobileDrawer}
              className="block text-gray-500 hover:text-black"
            >
              Top wear
            </Link>

            <Link
              href="#"
              onClick={toggleMobileDrawer}
              className="block text-gray-500 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
