"use client";
import Link from "next/link";
import {
  FaBars,
  FaRegTimesCircle,
  FaUserAlt,
  FaUserShield,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
  return (
    <div className={`flex h-screen ${isOpen ? "" : "sidebar-collapsed"}`}>
      <div
        className={`bg-gray-800 text-white w-64 p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white mb-4 w-full text-center py-2 rounded"
        >
          {isOpen ? <FaBars /> : <FaRegTimesCircle />}
        </button>
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center"></div>
          <h4 className="mt-3 text-2xl font-bold">JP Tucker</h4>
          <p className="text-base">CEO, optidan</p>
        </div>

        <ul className="flex flex-col mt-10 md:ml-8">
          <li className="mb-4">
            <Link href={""} className="flex items-center">
              <MdDashboard size={22} className="mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={""} className="flex items-center">
              <FaUserShield size={22} className="mr-3" />
              <span>Permissions</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={""} className="flex items-center">
              <FaUserAlt size={22} className="mr-3" />
              <span>Admin</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={"/dashboard/users"} className="flex items-center">
              <FaUserAlt size={22} className="mr-3" />
              <span>Users</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={"/dashboard/products"} className="flex items-center">
              <FaUserAlt size={22} className="mr-3" />
              <span>Products</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href={""} className="flex items-center">
              <FaUserAlt size={22} className="mr-3" />
              <span>Analytics</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
