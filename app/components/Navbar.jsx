"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TbPhoneCall } from "react-icons/tb";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Solutions",
      dropdown: [
        { label: "dropdown 1", path: "/solutions/drop1" },
        { label: "dropdown 1", path: "/solutions/drop2" },
      ],
    },
    { label: "Pricing", path: "/pricing" },
    {
      label: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="bg-white shadow-lg py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex-shrink-0 flex items-center">
            <img
              src={"/optidan-logo.svg"}
              alt=""
              className="w-[80%] md:w-full"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index} className="relative">
                  <button
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                    onClick={() => toggleDropdown(index)}
                  >
                    {link.label}
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute mt-2 w-48 bg-white shadow-md rounded-md">
                      {link.dropdown.map((item, subIndex) => (
                        <a
                          key={subIndex}
                          href={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={link.path}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                >
                  {link.label}
                </a>
              )
            )}
            <button className="bg-secondary px-6 py-1 text-white rounded-full flex items-center justify-center font-bold h-14 ml-auto">
              <TbPhoneCall size={24} className="mr-2" /> <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 text-md">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index} className="relative">
                  <button
                    className="text-gray-700 hover:text-gray-900 w-full text-left px-3 py-2 rounded-md font-medium"
                    onClick={() => toggleDropdown(index)}
                  >
                    {link.label}
                  </button>
                  {dropdownOpen === index && (
                    <div className="mt-1 w-full bg-white md:shadow-md md:rounded-md">
                      {link.dropdown.map((item, subIndex) => (
                        <a
                          key={subIndex}
                          href={item.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={link.path}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md font-medium"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
