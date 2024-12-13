import React from "react";
import Pagination from "../components/Pagination";
import Link from "next/link";

const users = () => {
  const userDetail = [
    {
      id: 1,
      uName: "John doe",
      age: 24,
      phone: "1234567890",
      email: "johndoe@mail.com",
      accessLevel: "admin",
    },
    {
      id: 2,
      uName: "John smith",
      age: 29,
      phone: "1234567890",
      email: "johnsmith@mail.com",
      accessLevel: "manager",
    },
    {
      id: 3,
      uName: "John martin",
      age: 29,
      phone: "1234567890",
      email: "johnsmith@mail.com",
      accessLevel: "user",
    },
    {
      id: 4,
      uName: "John wick",
      age: 33,
      phone: "123456sd7890",
      email: "johndoe@mail.com",
      accessLevel: "admin",
    },
    {
      id: 5,
      uName: "John smith",
      age: 22,
      phone: "1234567890",
      email: "johndsdsdsmith@mail.com",
      accessLevel: "manager",
    },
    {
      id: 6,
      uName: "John smith",
      age: 31,
      phone: "1234567890",
      email: "johndssmith@mail.com",
      accessLevel: "user",
    },
    {
      id: 7,
      uName: "John wick",
      age: 33,
      phone: "1234567890",
      email: "johndoe@mail.com",
      accessLevel: "admin",
    },
    {
      id: 8,
      uName: "John smith",
      age: 22,
      phone: "1234567890",
      email: "johndsdsdsmith@mail.com",
      accessLevel: "manager",
    },
    {
      id: 9,
      uName: "John smith",
      age: 31,
      phone: "1234567890",
      email: "johndssmith@mail.com",
      accessLevel: "user",
    },
    {
      id: 10,
      uName: "John smith",
      age: 35,
      phone: "1234567890",
      email: "johnsmith@gmail.com",
      accessLevel: "user",
    },
    {
      id: 9,
      uName: "John smith",
      age: 31,
      phone: "1234567890",
      email: "johnsmith@mail.com",
      accessLevel: "user",
    },
    {
      id: 10,
      uName: "John smith",
      age: 35,
      phone: "1234567890",
      email: "johnsmith@gmail.com",
      accessLevel: "user",
    },
    {
      id: 11,
      uName: "John wick",
      age: 29,
      phone: "1234567890",
      email: "johndssmith@mail.com",
      accessLevel: "user",
    },
    {
      id: 12,
      uName: "John smith",
      age: 35,
      phone: "1234567890",
      email: "johnsmith@gmail.com",
      accessLevel: "user",
    },
  ];

  return (
    <>
      <div className="mb-4 flex justify-between mt-5 flex-row">
        <div className="md:w-[300px]">
          <h2 className="text-3xl font-semibold">Users Dashboard</h2>
        </div>
        <div className="md:w-[500px]">
          <input
            type="text"
            placeholder="enter search here"
            className="py-3 px-3 outline-0 border border-gray-300 rounded-lg bg-gray-200 w-full"
          />
        </div>
        <div>
          <button className="bg-gray-300 hover:bg-gray-400 duration-200 py-2 px-5 rounded-full mr-3 text-gray-600 font-semibold">
            <Link href={"/dashboard/users/add"}>Add user</Link>
          </button>
          <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-800  rounded-full text-white font-semibold">
            Download Report
          </button>
        </div>
      </div>
      <div className="">
        <table class="table-auto md:w-full text-left text-md">
          <thead className="bg-gray-300 rounded-md">
            <tr>
              <th className="p-3">Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Access level</th>
            </tr>
          </thead>
          <tbody>
            {userDetail.map(({ id, uName, age, phone, email, accessLevel }) => (
              <tr key={id} className="border-b">
                <td className="p-3">{uName}</td>
                <td>{age}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                  <button className="bg-gray-300 hover:bg-indigo-700 duration-200 py-1 px-3 w-[100px] text-gray-900 hover:text-white rounded-md">
                    {accessLevel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination />
      </div>
    </>
  );
};

export default users;
