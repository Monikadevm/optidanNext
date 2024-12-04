import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const howItWorks = [
    {
      id: 1,
      title: "AI- Powered optimisation",
      description:
        "Our Generative AI SEO Tools optimise Digital Shelf content, product feeds, and SEO strategies at scale.",
    },
    {
      id: 2,
      title: "Seamless Integration",
      description:
        "Easily connect Optidan Al with platforms like Shopify, BigCommerce, and WooCommerce.",
    },
    {
      id: 3,
      title: "Rapid Results",
      description:
        "Monitor search performance, on-page conversions with rapid turn around of projects.",
    },
  ];

  return (
    <div className="main-bg2 py-10 md:py-20 ">
      <div className="container mx-auto grid md:grid-cols-2 px-5 md:px-0">
        <div>
          <img src="/traffic-growth.png" alt="" />
        </div>
        <div className="md:pl-[80px]">
          <h2 className="text-3xl md:text-[40px] mb-3 font-semibold">
            How it work !
          </h2>
          <p className="text-lg ">
            <span className="text-primary">3 Simple step</span> to transform
            your seo content performance
          </p>
          <ul className="md:mt-10">
            {howItWorks.map((data) => (
              <li
                className="bg-white flex justify-between my-4 p-3 shadow-lg shadow-gray-200 rounded-lg items-center"
                key={data.id}
              >
                <div className="">
                  <h4 className="flex items-center text-xl mb-3">
                    <FaCheckCircle className="mr-2" /> {data.title}
                  </h4>
                  <p className="md:w-[80%]">{data.description}</p>
                </div>
                <div className="text-6xl text-gray-100">0{data.id}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
