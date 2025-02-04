"use client";
import React from "react";
import { motion } from "framer-motion";

const DidYouKnow = () => {
  const info = [
    {
      id: 1,
      percent: "85%",
      description:
        "of Online Retail Websites scanned in Australia are Plagiarized ",
    },
    {
      id: 2,
      percent: "57%",
      description: "of pages scanned show Plagiarised Levels of 75%+",
    },
    {
      id: 3,
      percent: "85%",
      description: "of consumers have abandoned an online shopping cart.",
    },
    {
      id: 4,
      percent: "30%",
      description: "citing poor product descriptions as the reason.",
    },
  ];

  return (
    <div className="py-10 md:py-20 mt-20 md:mt-0">
      <div className="container mx-auto px-5 md:px-0">
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-3xl md:text-[40px] mb-8 font-semibold"
        >
          Did you know?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
          className="grid md:grid-cols-4 bg-white shadow-lg p-4 md:p-8 rounded-xl gap-8"
        >
          {info.map(({ id, percent, description }) => (
            <div
              className="md:border-r border-dashed border-gray-300 last:border-0"
              key={id}
            >
              <h3 className="text-3xl mb-3 text-[#C558B1] font-semibold">
                {percent}
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 2 }}
          className="text-center mt-10 md:mt-0"
        >
          <img src="/did-you-know.png" alt="" className="mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default DidYouKnow;
