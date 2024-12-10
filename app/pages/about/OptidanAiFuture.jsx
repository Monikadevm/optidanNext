"use client";
import { motion } from "framer-motion";
const OptidanAiFuture = () => {
  return (
    <section className="main-bg2 text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12"
      >
        <div className="w-full md:w-[50%] md:pr-10 mb-10 md:mb-0">
          <img src="/get-in-touch.png" alt="get in touch optidan" />
        </div>
        <div className="md:w-[50%] mb-10 md:mb-0 text-gray-800">
          <h2 className="text-3xl md:text-text-4xl  mb-5 font-semibold">
            The Future with JP and Optidan AI
          </h2>
          <p>
            As we look to the future, JP Tucker's leadership continues to be a
            guiding force for Optidan AI. His vision for a digitally optimised
            retail landscape that solves multiple challenges both online and
            instore, combined with his passion for technology and disruptive
            innovation , positions Optidan AI as a frontrunner in the content
            performance and online retail advisory/saas space. Join us as we
            embark on this exciting journey, redefining the standards of digital
            excellence and driving unparalleled results for our retail partners.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default OptidanAiFuture;
