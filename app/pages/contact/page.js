import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section className="text-white py-16 px-4 bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950">
        <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12">
          <div className="w-full md:w-[50%] md:pr-10">
            <div className="md:w-[500px]">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Take the First Step We will do the Rest.
              </h1>
              <p className="text-lg mb-6">
                we understand the unique challenges faced by e-commerce
                businesses. When you reach out to us, you're not just making a
                business inquiry; you're starting a conversation with a founding
                team dedicated to understanding and transforming your online
                presence.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] ">
            <img src="/contact-banner-optidan.png" alt="" />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10 md:py-20">
        <h2 className=" text-3xl md:text-[40px] md:leading-[50px] text-center mb-5 md:mb-10">
          We're here to help you
        </h2>
        <div className="flex flex-col md:flex-row md:w-[80%] mx-auto px-5 md:px-0">
          <div className="md:w-[35%]">
            <div className="bg-white rounded-xl shadow-lg p-5 mb-4">
              <h4 className="flex items-center font-semibold mb-3">
                <span className="h-12 w-12 rounded-full flex items-center justify-center bg-[#3E308A] mr-3">
                  <FaPhone className="text-white" />
                </span>
                Call
              </h4>
              <p>61 451 851 810</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-5 mb-4">
              <h4 className="flex items-center font-semibold mb-3">
                <span className="h-12 w-12 rounded-full flex items-center justify-center bg-[#3E308A] mr-3">
                  <FaPhone className="text-white" />
                </span>
                Email
              </h4>
              <p>
                <Link href="mailto:info@optidan.com">info@optidan.com</Link>
                <br />
                <Link href="mailto:customerteam@optidan.com">
                  customerteam@optidan.com
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-5 mb-4">
              <h4 className="flex items-center font-semibold mb-3">
                <span className="h-12 w-12 rounded-full flex items-center justify-center bg-[#3E308A] mr-3">
                  <FaPhone className="text-white" />
                </span>
                Location
              </h4>
              <p>Level 1, 11 York St,Sydney 2000</p>
            </div>
          </div>
          <div className="w-full md:pl-10 mt-10 md:mt-0">
            <div className="bg-[#FFF1FF] py-2 rounded-t-lg">
              <h3 className="text-center text-3xl text-primary font-semibold">
                Drop us a line
              </h3>
            </div>
            <div className="p-4 border rounded-b-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded-md p-2 outline-0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="border rounded-md p-2 outline-0"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="mb-2">Website</label>
                  <input
                    type="text"
                    placeholder="Enter your website URL"
                    className="border rounded-md p-2 outline-0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Choose Topics</label>
                  <select className="border rounded-md p-2">
                    <option>Select from list</option>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="border rounded-md p-2 outline-0"
                  rows={4}
                ></textarea>
              </div>
              <div className="mt-4">
                <buton className="bg-primary py-3 flex rounded-full justify-center text-white">
                  Submit
                </buton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-bg2 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-0">
          <div className="md:w-[50%]">
            <div>
              <h2 className="text-3xl md:text-[40px] md:leading-[50px] mb-3">
                Take The First Step. We will do the Rest.
              </h2>
              <p>
                At Optidan AI, we understand the unique challenges faced by
                e-commerce businesses. When you reach out to us, you're not just
                making a business inquiry; you're starting a conversation with a
                founding team dedicated to understanding and transforming your
                online presence. My approach (JP Tucker) is not to sell to you
                but to explore how we can enhance your performance together.
              </p>
              <p>
                We prioritise your comfort and confidence, ensuring that every
                interaction is about discovering opportunities and solutions
                tailored to your needs. By partnering with Optidan AI, you gain
                a trusted advisor committed to optimising your content and
                boosting your search & conversion performance without
                high-pressure sales tactics. By leveraging our expertise, you
                can achieve significant improvements in search engine rankings,
                on-page conversions, and overall customer satisfaction. Key
                features include:
              </p>
              <h4 className="text-xl mt-10">
                AI-driven content optimisation at scale
              </h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="bg-white rounded-xl border-x-2 border-purple-900 p-3 shadow-md">
                <h4 className="text-center">Seamless integration</h4>
              </div>
              <div className="bg-white rounded-xl border-x-2 border-purple-900 p-3 shadow-md">
                <h4 className="text-center">Cost efficiency</h4>
              </div>
              <div className="bg-white rounded-xl border-x-2 border-purple-900 p-3 shadow-md">
                <h4 className="text-center">Data-driven insights</h4>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl border-x-2 border-purple-900 p-3 shadow-md">
                <h4 className="text-center">
                  Rapid implementation (in as little as 30 days)
                </h4>
              </div>
              <div className="bg-white rounded-xl border-x-2 border-purple-900 p-3 shadow-md">
                <h4 className="text-center">
                  Brand consistency (Talk to your cusomters)
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 mt-8 md:mt-10">
              Feel free to reach out to us and let's chat about your current
              performance and the opportunities that can help transform your
              business performance.
            </div>
          </div>
          <div className="md:[w-50%] md:pl-10 mb-10 md:mb-0">
            <img src="/contact-page-seo.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
