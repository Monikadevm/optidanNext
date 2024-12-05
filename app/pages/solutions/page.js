import React from "react";

import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const page = () => {
  const ourSolutions = [
    {
      id: 1,
      title: "Digital Shelf Optimisation",
      description:
        "We enhance product titles, descriptions, and digital assets to improvesearch rankings and customer experience. Our AI-driven approach ensures that each product listing is fully optimised for maximum visibility.",
    },
    {
      id: 2,
      title: "eCommerce Product Data Managemen",
      description:
        "Optidan AI seamlessly integrates and syndicates product information across multiple eCommerce platforms. This integration ensures your product data is accurate and up-to-date everywhere it appears.",
    },
    {
      id: 3,
      title: "Multi-Channel Data Syndication",
      description:
        "We ensure consistent and accurate product data across all sales channels. Whether you’re selling on your own website or third-party marketplaces, your product information remains uniform.",
    },
    {
      id: 4,
      title: "AI-Powered Content Optimisation",
      description:
        "We ensure consistent and accurate product data across all sales channels. Whether you’re selling on your own website or third-party marketplaces, your product information remains uniform.",
    },
    {
      id: 5,
      title: "Product Content Management",
      description:
        "Our platform automates content creation and optimisation for various pages including category pages, brand pages, product descriptions, and blogs. With consistent updates, your content remains fresh and engaging.",
    },
    {
      id: 6,
      title: "Product Content Management",
      description:
        "Our platform automates content creation and optimisation for various pages including category pages, brand pages, product descriptions, and blogs. With consistent updates, your content remains fresh and engaging.",
    },
  ];
  const benefits = [
    {
      id: 1,
      img: "/solutions-benefits1.png",
      title: "Increased Organic Traffic",
      detail:
        "With improved SEO through optimised content, your site will attract more visitors organically. Higher visibility on search engines translates into more potential customers discovering your products.",
    },
    {
      id: 2,
      img: "/solutions-benefits2.png",
      title: "Increased Organic Traffic",
      detail:
        "With improved SEO through optimised content, your site will attract more visitors organically. Higher visibility on search engines translates into more potential customers discovering your products.",
    },
    {
      id: 3,
      img: "/solutions-benefits3.png",
      title: "Increased Organic Traffic",
      detail:
        "With improved SEO through optimised content, your site will attract more visitors organically. Higher visibility on search engines translates into more potential customers discovering your products.",
    },
  ];
  const gettingStarted = [
    {
      id: 1,
      title: "Request a Demo",
      description:
        "Visit our website and request a demo to see how Optidan AI can transform your content performance",
    },
    {
      id: 2,
      title: "Onboarding Consultation",
      description:
        " Once you've decided to proceed, we'll schedule an onboarding consultation to understand your specific needs and goals. This ensures we tailor our services to your business requirements.",
    },
    {
      id: 3,
      title: "Integration",
      description:
        "Our team will assist you in integrating Optidan AI with your existing eCommerce platforms. This seamless process is designed to minimise disruption to your operations.",
    },
    {
      id: 4,
      title: " Project Setup",
      description:
        "Optidan AI sets up the project to deliver unique, high-performing content at scale. We ensure all content, from product descriptions to blog posts, is optimised for search engines and tailored to reflect your brand voice consistently.",
    },
    {
      id: 5,
      title: "Monitoring & Optimisation",
      description:
        "After setup, Optidan AI begins monitoring your digital shelf. Our platform provides real-time analytics so you can track improvements in traffic, conversions, and overall content performance.",
    },
  ];
  return (
    <>
      <section className=" text-white py-16 px-4 bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950">
        <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12">
          <div className="w-full md:w-[50%] md:pr-10">
            <div className="md:w-[500px]">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Optimising Your Digital Shelf for Performance
              </h1>
              <p className="text-lg mb-6">
                Welcome to Optidan AI, your solution for transforming content
                performance at scale. Designed for mid to large online
                retailers, our platform leverages cutting-edge AI and
                proprietary technology to offer top-tier digital shelf
                optimisation solutions. In today's competitive market, standing
                out is crucial, and Optidan AI ensures your business does just
                that.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%] ">
            <img src="/solutions-banner.png" alt="" />
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-8 p-5 md:py-20">
        <div className="w-full md:w-1/2">
          <img
            src="/problem-solutions.png"
            alt="optidan"
            className="rounded-lg md:w-[680px]"
          />
        </div>

        <div className="w-full md:w-1/2 md:text-left text-black">
          <h2 className="text-3xl font-semibold md:text-[40px] mb-4 m:width-[90%] md:leading-[50px]">
            The Problem
          </h2>
          <p className="text-black mb-6 text-lg">
            Retailers frequently grapple with managing extensive volumes of
            product data duplicated from suppliers. This duplication results in
            several issues:
          </p>
          <ul className="list-disc list-inside text-black mb-6 text-lg leading-6  md:w-[80%]">
            <li className="flex items-start mb-2">
              <div>
                <FaRegCheckCircle
                  size={25}
                  className=" text-[#0F2378] mr-3 mt-1"
                />
              </div>

              <div>
                <span className="font-semibold mr-1">
                  Search Engine Penalties:
                </span>
                Search engines penalise websites with duplicate content, leading
                to decreased visibility.
              </div>
            </li>
            <li className="flex items-start mb-2">
              <div>
                <FaRegCheckCircle
                  size={25}
                  className=" text-[#0F2378] mr-3 mt-1"
                />
              </div>
              <div>
                <span className="font-semibold mr-1">
                  Inconsistent Brand Messaging:
                </span>
                Duplicate content can cause inconsistencies in how your brand is
                presented.
              </div>
            </li>
            <li className="flex items-start mb-2">
              <div>
                <FaRegCheckCircle
                  size={25}
                  className=" text-[#0F2378] mr-3 mt-1"
                />
              </div>
              <div>
                <span className="font-semibold mr-1">
                  Poor Customer Experience:
                </span>
                Inconsistent or duplicated product information can confuse
                customers and reduce trust in your brand.
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="container mx-auto py-10  md:py-20 text-center px-5 md:px-0">
        <h2 className="text-2xl md:text-[40px] mb-5 font-semibold">
          The Current Challenge
        </h2>
        <p className="md:w-[50%] md:mx-auto">
          Competing with industry giants like Temu and Shein demands a robust
          digital presence. However, many retailers lack the necessary tools and
          expertise to manage and optimise their digital shelves effectively.
          This inadequacy leads to missed opportunities for customer engagement
          and sales.
        </p>
        <img src="/did-you-know.png" alt="" className="mx-auto mt-10" />
      </div>
      <div className="main-bg2 py-10 md:py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-[40px] leading-[50px`] mb-5 text-center">
            Our Solutions
          </h2>
          <p className="mb-5 text-center text-xl">
            Optidan AI addresses these challenges with comprehensive solutions
          </p>
          <ul className="grid md:grid-cols-2 gap-8 mt-8 md:mt-20 px-5 md:px-0">
            {ourSolutions.map(({ id, title, description }) => (
              <li
                className="bg-white flex justify-between  p-3 shadow-lg shadow-gray-200 rounded-lg items-center md:border-r-2 border-purple-800"
                key={id}
              >
                <div className="">
                  <h4 className="flex items-center text-xl mb-3">
                    <FaCheckCircle size={22} className="mr-2 text-indigo-900" />
                    {title}
                  </h4>
                  <p className="">{description}</p>
                </div>
                <div className="text-6xl text-gray-100 hidden md:flex">
                  0{id}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto md:py-10 py-20">
        <h2 className="text-3xl md:text-[40px] md:leading-[50px] mb-6 md:mb-10 text-center">
          Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-5 md:px-0">
          {benefits.map(({ id, img, title, detail }) => (
            <div key={id} className="rounded-2xl shadow-2xl">
              <img src={img} alt="" className="w-full" />

              <div className="p-5">
                <h4 className="my-4 text-xl">{title}</h4>
                <p>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-10 md:py-20 grid md:grid-cols-2 px-5 md:px-0">
        <div>
          <h2 className="text-3xl md:text-[40px] md:leading-[50px] mb-6 md:mb-10">
            Getting Started
          </h2>
          <ul className="">
            {gettingStarted.map(({ id, title, description }) => (
              <li className="mb-5" key={id}>
                <h4 className="flex text-xl font-semibold text-gray-600 mb-2">
                  <FaCheckCircle size={22} className="text-indigo-900 mr-2" />
                  {title}
                </h4>
                <p className="text-gray-500">{description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className=" px-5 md:px-0 mt-5 md:mt-0">
          <img src="/solutions-startup.png" alt="" className="ml-auto" />
        </div>
      </div>
      <div className="container mx-auto text-center pb-8 md:pb-14 px-5 md:px-0">
        <h2 className="text-3xl md:text-[40px] md:leading-[50px] mb-5 md:mb-6">
          Support
        </h2>
        <p className="md:w-[800px] mx-auto">
          Optidan AI is always here to support you. We work closely with your
          team to deliver customised and unique outputs tailored to your
          business needs. Whether you need strategic guidance or technical
          assistance, our expert team is here to help ensure your success.
        </p>
      </div>
    </>
  );
};

export default page;
