import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurServices = () => {
  const ourServicesData = [
    {
      id: 1,
      img: "/seo-services.png",
      title: "Generative AI SEO Services",
      description:
        " Optidan AI uses Generative AI to automate SEO strategies, optimising content and technical SEO for improved rankings. This service ensures continuous SEO enhancement with minimal manual effort.",
    },
    {
      id: 2,
      img: "/optidan-management-services.png",
      title: "Large Product Feed Management",
      description:
        "Optidan AI optimises large-scale product feeds for eCommerce platforms, ensuring accurate and SEO-friendly listings. This service improves product visibility, leading to higher search rankings and better conversion rates.",
    },
    {
      id: 3,
      img: "/optidan-ai-services.png",
      title: "AI Content Optimisation (at scale)",
      description:
        "Optidan AI enables businesses to optimise and scale content creation using Generative AI. This service ensures high-quality, SEO-optimised content tailored to your brand's voice, delivered efficiently and consistently.",
    },
  ];

  return (
    <div className="optidan-services py-10 md:py-20">
      <div className="container mx-auto px-5 md:px-0">
        <div className="md:w-[40%] mx-auto text-center">
          <span className="inline-block mb-3 rounded-full border px-4 py-2 text-indigo-800 border-indigo-800">
            Our Services
          </span>
          <h2 className="font-semibold text-3xl md:text-[40px] my-8 md:my-10 md:w-[95%] mx-auto md:leading-[50px]">
            AI SEO Software Tools for Complete Optimisation
          </h2>
        </div>
        <div className="grid  md:grid-cols-3 md:gap-8">
          {ourServicesData.map(({ id, img, title, description }) => (
            <div
              className="bg-white p-6 rounded-2xl hover:shadow-lg duration-300 mb-3 border border-dashed border-gray-400 md:border-0 "
              key={id}
            >
              <Image
                src={img}
                width={62}
                height={62}
                alt=""
                className="xs:mx-auto lg:mr-auto"
              />
              <h3 className="text-2xl font-semibold md:w-[70%] my-4">
                {title}
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <button className="primary-outline-btn rounded-full py-4 px-8 font-semibold flex items-center mx-auto text-primary w-full md:w-auto justify-center">
            <span className="mr-4">View our Service</span> <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
