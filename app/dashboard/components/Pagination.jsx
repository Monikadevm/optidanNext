import Link from "next/link";
import React from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="w-auto ml-auto flex justify-end">
      <ul className="flex mt-10 text-white font-semibold">
        <li className="m-[2px]">
          <Link
            href={""}
            className="p-2 bg-gray-400 hover:bg-indigo-600 border rounded-lg duration-200 w-8 h-8 flex items-center justify-center"
          >
            &laquo;
          </Link>
        </li>
        <li className="m-[2px]">
          <Link
            href={""}
            className="p-2 bg-gray-400 hover:bg-indigo-600 border rounded-lg duration-200 w-8 h-8 flex items-center justify-center"
          >
            1
          </Link>
        </li>
        <li className="m-[2px]">
          <Link
            href={""}
            className="p-2 bg-gray-400 hover:bg-indigo-600 border rounded-lg duration-200 w-8 h-8 flex items-center justify-center"
          >
            2
          </Link>
        </li>
        <li className="m-[2px]">
          <Link
            href={""}
            className="p-2 bg-gray-400 hover:bg-indigo-600 border rounded-lg duration-200 w-8 h-8 flex items-center justify-center"
          >
            3
          </Link>
        </li>
        <li className="m-[2px]">
          <Link
            href={""}
            className="p-2 bg-gray-400 hover:bg-indigo-600 border rounded-lg duration-200 w-8 h-8 flex items-center justify-center"
          >
            &raquo;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
