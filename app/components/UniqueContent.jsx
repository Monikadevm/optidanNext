"use client";
import React from "react";
import { motion } from "framer-motion";

const UniqueContent = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, translateX: -10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1,
          }}
          className="w-full md:w-[50%]"
        >
          <div className="pr-10">
            <h2 className="text-3xl md:text-[40px] md:leading-[50px] mb-6 font-semibold">
              Find out How unique your content is
            </h2>
            <h4 className="text-lg font-semibold mb-3">
              High quality i unique i human -like
            </h4>
            <p>
              optidan AI delivers content 95% faster than Chatgpt, saving your
              countless hours every month while delivering superior performance
              and results.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 10 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="w-full md:w-[50%]"
        >
          <img src="/unique-content-right.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default UniqueContent;
