import React from "react";
import BlogBanner from "./components/BlogBanner";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock, FaRegUser } from "react-icons/fa";

const page = () => {
  return (
    <>
      <BlogBanner />
      <div className="container mx-auto py-20">
        <div className="flex justify-between flex-col md:flex-row px-5 md:px-0">
          <div className="md:w-[65%] mb-8 md:mb-0">
            <div>
              <img src="/blog-banner.png" alt="" />
              <div className="mt-6 mb-4">
                <p className="flex flex-row">
                  <span className="flex items-center mr-8">
                    <FaRegUser className="mr-4" /> By JP Tucker
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-4" /> November 4, 2024
                  </span>
                </p>
              </div>
              <h2 className="text-2xl mb-3 font-semibold md:w-[80%]">
                What Is SEO and How Does It Work? A Comprehensive Overview
              </h2>
              <p className="md:w-[75%]">
                Search Engine Optimization (SEO) is the art and science of
                enhancing a website's visibility on search engines like Google.
                Its primary role in digital marketing is to attract organic
                traffic by improving a site's ranking in search engine results
                pages (SERPs). This not only boosts brand visibi lity but also
                drives potential customers to your business.
              </p>
            </div>
          </div>
          <div className="md:w-[35%] flex flex-col ">
            <div className="flex mb-5">
              <input
                type="text"
                placeholder="Search"
                className="border p-3 outline-0 shadow-md shadow-gray-100 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col border border-gray-200 rounded-lg mb-4">
              <h3 className="p-4 font-semibold text-xl">Categories</h3>
              <ul className="flex flex-col">
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    All Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    All in the Workplace
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    AI SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    Plagiarism Removal
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    Shopify SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="px-5 py-3 border-b border-gray-200 flex w-full hover:bg-fuchsia-700 hover:text-white duration-200"
                  >
                    Uncategorized
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col border border-gray-200 rounded-lg mb-4">
              <h4 className="p-5 border-b text-[#3E308A] font-semibold text-xl">
                Recent posts
              </h4>
              <div className="border-dashed border-b flex flex-row p-5 items-center">
                <div className="mr-5">
                  <Image src={"/recent-posts1.png"} width={70} height={62} />
                </div>
                <div>
                  <h3 className="font-semibold">
                    What Is SEO and How Does It Work? A Comprehensive Overview
                  </h3>
                </div>
              </div>
              <div className="border-dashed border-b flex flex-row p-5 items-center">
                <div className="mr-5">
                  <Image src={"/recent-posts2.png"} width={70} height={62} />
                </div>
                <div>
                  <h3 className="font-semibold">
                    How Do I Do SEO for My Website? Step-by-Step Guide
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 px-5 md:px-0">
          <div className="md:max-w-[400px] mb-4 md:mb-0 ">
            <div className="mb-4">
              <img src="/main-blog1.png" alt="" className="w-full" />
              <p className="flex flex-row mt-5">
                <span className="flex items-center mr-8">
                  <FaRegUser className="mr-4" /> By JP Tucker
                </span>
                <span className="flex items-center">
                  <FaRegClock className="mr-4" /> November 4, 2024
                </span>
              </p>
              <h3 className="text-xl font-semibold my-3">
                Content Scale Solutions: How Generative AI Can Help Grow Your
                Content Library
              </h3>
              <p>
                Discover how generative AI can scale your content library,
                enhance personalization, and optimize marketing strategies for
                online retailers.
              </p>
            </div>
          </div>
          <div className="md:max-w-[400px] mb-4 md:mb-0">
            <div className="mb-4">
              <img src="/main-blog2.png" alt="" className="w-full" />
              <p className="flex flex-row mt-5">
                <span className="flex items-center mr-8">
                  <FaRegUser className="mr-4" /> By JP Tucker
                </span>
                <span className="flex items-center">
                  <FaRegClock className="mr-4" /> November 4, 2024
                </span>
              </p>
              <h3 className="text-xl font-semibold my-3">
                What Is SEO and How Does It Work? A Comprehensive Overview
              </h3>
              <p>
                Search Engine Optimization (SEO) is the art and science of
                enhancing a website's visibility on search engines like Google.
                Its primary role in digital marketing.
              </p>
            </div>
          </div>
          <div className="md:max-w-[400px] mb-4 md:mb-0">
            <div className="mb-4">
              <img src="/main-blog3.png" alt="" className="w-full" />
              <p className="flex flex-row mt-5">
                <span className="flex items-center mr-8">
                  <FaRegUser className="mr-4" /> By JP Tucker
                </span>
                <span className="flex items-center">
                  <FaRegClock className="mr-4" /> November 4, 2024
                </span>
              </p>
              <h3 className="text-xl font-semibold my-3">
                How Do I Do SEO for My Website? Step-by-Step Guide
              </h3>
              <p>
                How Do I Do SEO for My Website? Step-by-Step Guide” can set you
                on the right path to improving online visibility. Search Engine
                Optimization, or SEO, is the practice of enhancing your
                website's presence in search.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ul className="flex mx-auto justify-center">
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                &laquo;
              </Link>
            </li>
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                1
              </Link>
            </li>
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                2
              </Link>
            </li>
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                ...
              </Link>
            </li>
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                9
              </Link>
            </li>
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                10
              </Link>
            </li>
            <li className="m-1">
              <Link
                href={""}
                className="border-2 font-semibold py-2 px-3 rounded-md hover:border-fuchsia-700 hover:text-fuchsia-700"
              >
                &raquo;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
