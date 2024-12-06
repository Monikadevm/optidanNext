import React from "react";

const BlogBanner = () => {
  return (
    <section className=" text-white py-16 px-4 bg-gradient-to-r from-purple-800 via-indigo-900 to-indigo-950">
      <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-12">
        <div className="w-full md:w-[50%] md:pr-10">
          <div className="md:w-[500px]">
            <h1 className="text-4xl md:text-6xl font-bold  text-center md:text-left mb-6 md:mb-0">
              Optidan Blogs
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[50%] ">
          <img src="/blog-banner-seo.png" alt="" className="ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
