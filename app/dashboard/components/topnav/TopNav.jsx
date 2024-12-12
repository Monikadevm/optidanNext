"use client";
import { useState } from "react";
import Link from "next/link";
import Search from "./Search";
import { FaRegBell } from "react-icons/fa";
import TopNavRight from "./TopNavRight";

const TopNav = () => {
  const [isTopNavDropdownOpen, setIsTopNavDropdownOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 py-2 px-5 md:px-8">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href={"/dashboard"}
            className="text-xl font-semibold text-white "
          >
            Optidan Dashboard
          </Link>
        </div>
        {/* <div>
          <Search />
        </div> */}
        <div>
          <TopNavRight />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
