"use client";
import React from "react";
import { motion } from "framer-motion";

const ThreeSections = () => {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <motion.div
            initial={{ opacity: 0, translateX: -15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="md:w-[50%] md:pr-20"
          >
            <h3 className="text-3xl md:text-4xl mb-3 font-semibold">
              A Passion for Disruptive Innovation
            </h3>
            <p>
              JP's love for challenging the norm and disrupting conventional
              methods shines through in Optidan AI's ethos. He firmly believes
              in harnessing the power of technology to deliver more for less,
              ensuring that our retail partners not only survive but thrive in
              the competitive digital arena. His vision is underpinned by a
              commitment to leveraging AI and machine learning to revolutionize
              how online retailers optimize their digital shelf presence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="mt-10 md:mt-0"
          >
            <img
              src="/traffic-growth.png"
              alt="A Passion for Disruptive Innovation"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <motion.div
            initial={{ opacity: 0, translateX: -15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="mt-10 md:mt-0"
          >
            <img
              src="/traffic-growth.png"
              alt="A Passion for Disruptive Innovation"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="md:w-[50%] md:pr-20"
          >
            <h3 className="text-3xl md:text-4xl mb-3 font-semibold">
              A Passion for Disruptive Innovation
            </h3>
            <p>
              Having managed head office accounts and led significant projects
              in his previous roles, JP understands the importance of aligning
              with retailers' goals and challenges. Optidan AI is more than just
              a service provider - it's a partner that shares in the ambitions
              and successes of its clients through a hybrid consulting SaaS
              Model. JP's approach is all about creating bespoke solutions that
              resonate with the unique needs of each retailer, ensuring that
              every strategy is as individual as the businesses we serve. It's
              what sets us apart, and can't be copied.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <motion.div
            initial={{ opacity: 0, translateX: -15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="md:w-[50%] md:pr-20"
          >
            <h3 className="text-3xl md:text-4xl mb-3 font-semibold">
              Proven Results, Proven Expertise
            </h3>
            <p>
              JP's journey with Optidan AI began as a personal mission to solve
              the content challenges he encountered in his own Shopify Startup.
              In 2016, he founded his own online marketplace, growing it to a
              7-figure success story, largely attributed to his innovative use
              of Tech, Customisation including AI in content performance
              management. This personal success story + his earlier career
              experience is at the core of Optidan AI's foundation - a testament
              to the effectiveness of our approach and strategies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 15 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
            className="mt-10 md:mt-0"
          >
            <img
              src="/traffic-growth.png"
              alt="A Passion for Disruptive Innovation"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSections;
