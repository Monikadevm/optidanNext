"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutPartners = () => {
  const partners = [
    { id: 1, img: "/about-partners1.png", width: "83", height: "83" },
    { id: 2, img: "/about-partners2.png", width: "167", height: "61" },
    { id: 3, img: "/about-partners3.png", width: "140", height: "55" },
    { id: 4, img: "/about-partners4.png", width: "159", height: "37" },
  ];

  return (
    <div className="py-5 md:py-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center px-5"
        >
          {partners.map((data) => (
            <div
              key={data.id}
              className="bg-white px-8 py-2 rounded-full shadow-2xl shadow-gray-100 w-full md:w-auto "
            >
              <Image
                src={data.img}
                width={data.width}
                height={data.height}
                className="mx-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPartners;
