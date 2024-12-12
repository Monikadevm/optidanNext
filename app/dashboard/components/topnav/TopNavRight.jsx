"use client";
import Link from "next/link";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";

const TopNavRight = () => {
  const [isTopNavDropdownOpen, setIsTopNavDropdownOpen] = useState(false);
  return (
    <div className="flex items-center">
      <Link href={""} className="text-white">
        <FaRegBell size={22} />
      </Link>
      <button className="bg-black py-2 px-4 mx-5 rounded-full text-white opacity-50 hover:opacity-100 duration-200 font-semibold">
        Add Listings
      </button>
      <div className="rounded-full h-14 w-14 bg-gray-400 relative">
        <button
          className=" px-4 py-2 rounded flex items-center justify-center"
          onClick={() => setIsTopNavDropdownOpen(!isTopNavDropdownOpen)}
        >
          Menu
        </button>
        {isTopNavDropdownOpen && (
          <div className="absolute top-8 right-0 mt-2 w-48 bg-white text-black rounded shadow-lg duration-300">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="">Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="">Settings</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="" className="w-full text-left">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavRight;
