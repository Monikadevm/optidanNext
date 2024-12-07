"use client";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950 text-white py-16 px-4">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12">
        <motion.div
          initial={{ opacity: 0, translateX: -30 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/3 md:pr-10"
        >
          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The Optidan AI Story
            </h1>
            <p className="text-lg mb-6">
              At the heart of Optidan AI's innovative approach to digital
              optimisation and SEO lies the vision and drive of our founder, JP
              Tucker. A seasoned professional with a rich history in the retail
              sector, JP brings a unique blend of expertise and passion to the
              forefront of online retail technology, with a solution driven
              approach.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}
          className="w-full md:w-1/3 "
        >
          <img src="/about-banner-optidan.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;
