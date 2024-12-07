"use client";
import { motion } from "framer-motion";
const InnovativeLeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto py-10  md:py-20 text-center px-5 md:px-0"
    >
      <h2 className="text-2xl md:text-[40px] mb-5 font-semibold">
        From Industry Expert to Innovative Leader{" "}
      </h2>
      <p className="md:w-[50%] md:mx-auto">
        Leverage our cutting-edge AI solutions and industry expertise to
        accelerate your business growth. See how we turn challenges into
        opportunities with seamless AI SEO and eCommerce optimisation powered by
        Generative AI.
      </p>
      <img src="/did-you-know.png" alt="" className="mx-auto mt-10" />
    </motion.div>
  );
};

export default InnovativeLeader;
