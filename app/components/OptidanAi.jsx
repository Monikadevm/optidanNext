import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OptidanAi = () => {
  return (
    <div className="optidan-services py-10 md:py-20">
      <div className="container mx-auto grid md:grid-cols-2">
        <div className="px-5">
          <img src="/optidan-ai.png" alt="" />
        </div>
        <div className="md:w-[100%] px-5 md:px-0 md:pl-8">
          <h2 className="mt-14 font-semibold md:mt-0 text-2xl md:text-[40px] mb-4 md:leading-[50px]">
            Optidan AI are Transforming Your Digital Strategy with Generative
            AI-Powered Solutions
          </h2>
          <div className="md:bg-white md:p-8 rounded-xl md:border-r-2 border-indigo-800 md:shadow-xl">
            <p className="mb-3">
              At Optidan AI, our founders have drawn on their extensive
              experience in online retail to develop cutting-edge, AI-powered
              solutions that transform how businesses optimise their digital
              presence. Our mission is to equip brands with advanced tools,
              including Product Feed Management, AI SEO, and content writing
              optimisation at scale, to thrive in today's competitive digital
              landscape.
            </p>
            <p>
              We specialise in driving superior search performance through
              AI-driven SEO enhancement, optimising product feeds, and
              maintaining a consistent, impactful brand voice. Our solutions
              ensure that your content resonates with your audience, increasing
              search traffic, on-page conversions, and achieving your business
              goals. Partner with Optidan AI to unlock your business's full
              potential with our powerful AI SEO tools that elevate your
              content, optimise search engine visibility, increase on-page
              conversion and deliver measurable results across all digital
              channels.
            </p>
          </div>
          <button className="primary-outline-btn rounded-full py-4 px-8 font-semibold flex items-center justify-center  text-primary mt-4 md:mt-7 w-full md:w-auto">
            <span className="mr-4">Learn more</span> <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptidanAi;
