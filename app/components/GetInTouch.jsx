"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="main-bg2 text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12">
        <motion.div
          initial={{ opacity: 0, translateX: -10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="w-full md:w-1/3 bg-white  rounded-2xl shadow-lg text-left mb-10 md:mb-0"
        >
          <div className="bg-indigo-900 rounded-t-2xl p-5">
            <h2 className="text-3xl font-semibold  text-white text-center">
              Get in touch
            </h2>
          </div>
          <form className="p-5 ">
            <div className="space-y-4 text-gray-600">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="lastName"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="website"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="Enter Website URL"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 py-3 px-6 bg-primary rounded-full text-white font-semibold outline-none flex items-center justify-center  w-full"
                >
                  <span className="mr-3">Submit</span> <FaArrowRight />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="w-full md:w-[50%] md:pr-10"
        >
          <img src="/get-in-touch.png" alt="get in touch optidan" />
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
