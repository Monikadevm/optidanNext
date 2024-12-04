import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center gap-8 p-5 md:py-20">
      <div className="w-full md:w-1/2">
        <img
          src="/why-choose-us.png"
          alt="optidan"
          className="rounded-lg md:w-[680px]"
        />
      </div>

      <div className="w-full md:w-1/2 md:text-left text-black">
        <span className="text-lg text-primary flex mb-3">Why Choose Us ?</span>
        <h2 className="text-3xl font-semibold md:text-[40px] mb-4 m:width-[90%] md:leading-[50px]">
          AI-Powered SEO Solution Champions for eCommerce Growth
        </h2>
        <p className="text-black mb-6 text-lg">
          Leverage our cutting-edge AI solutions and industry expertise to
          accelerate your business growth. See how we turn challenges into
          opportunities with seamless AI SEO and eCommerce optimisation powered
          by Generative AI.
        </p>
        <ul className="list-disc list-inside text-black mb-6 text-lg leading-6 md:border  md:p-5 rounded-lg md:w-[80%]">
          <li className="flex md:items-center mb-2">
            <FaRegCheckCircle className="text-2xl mt-2 text-[#0F2378] mr-3" />
            AI-Powered Precision for Peak Performance
          </li>
          <li className="flex md:items-center mb-2">
            <FaRegCheckCircle className="text-2xl mt-2 text-[#0F2378] mr-3" />
            Proven Results, Rankings from Page 60 to Page 1
          </li>
          <li className="flex md:items-center mb-2">
            <FaRegCheckCircle className="text-2xl mt-2 text-[#0F2378] mr-3" />
            Innovation Driving Efficiency in your search results
          </li>
        </ul>
        <button className="px-10 rounded-full py-4 border-primary text-primary flex items-center primary-outline-btn w-full md:w-auto justify-center mt-8 md:mt-0">
          <span className="mr-2 font-bold">Read More</span> <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
