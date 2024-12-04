import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="main-banner-bg text-white py-16 px-4">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12">
        <div className="w-full md:w-2/3 md:pr-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We Transform Search & Conversation Performance With Generative AI
            SEO- AT Scale
          </h1>
          <p className="text-lg mb-6">
            Optidan Al leverages Generative Al to enhance Al-driven con- tent
            performance for online retailers, streamlining content workflows and
            optimising product feeds at scale for improved SEO rankings in as
            little as 30 days.
          </p>
        </div>

        <div className="w-full md:w-1/3 bg-white  rounded-2xl shadow-lg text-left ">
          <div className="bg-[#FFF1FF] rounded-t-2xl p-5">
            <h2 className="text-3xl font-semibold  mb-2 text-[#AA50A9]">
              Free Content Audit
            </h2>
            <p className="text-black text-lg">
              Reach out now and get your transformation started
            </p>
          </div>
          <form className="p-5">
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="website"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="Enter your website url"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 py-3 px-6 bg-primary rounded-full text-white font-semibold focus:outline-none flex items-center justify-center  w-full"
                >
                  <span className="mr-3">Submit</span> <FaArrowRight />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
