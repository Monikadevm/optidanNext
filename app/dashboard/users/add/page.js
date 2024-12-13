import React from "react";

const addUser = () => {
  return (
    <>
      {/* 
    
    USERNAME
    EMAIL
    PASSWORD
    PHONE
    IS ADMIN (DRPDOWN)
    IS ACTIVE (DRPDOWN)
    aDDRESS

    submit
    */}
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="mb-1">
            Name:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Please Enter Name"
            className="p-3 border rounded-lg shadow-sm outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="p-3 border rounded-lg shadow-sm outline-none "
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="p-3 border rounded-lg shadow-sm outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="phoneNumber"
            className="mb-1 font-semibold text-gray-500"
          >
            Phone:
          </label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            className="p-3 border rounded-lg shadow-sm outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber" className="mb-1">
            Is Admin:
          </label>
          <select
            id="phoneNumber"
            className="p-3 border rounded-lg shadow-sm outline-none"
          >
            <option>Is Admin</option>
            <option>Is User</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default addUser;
