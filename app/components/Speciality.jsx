import React from "react";

const Speciality = () => {
  return (
    <div className="bg-white py-10 md:py-32 speciality-bg">
      <div className="container mx-auto px-5 md:px-0 text-lg">
        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="md:px-20 md:py-8 rounded-3xl  bg-white shadow-xl shadow-gray-100 border-x-4 border-purple-700 p-4 flex items-center">
            <h4>Automated SEO & Content Management</h4>
          </div>
          <div className="md:px-20 md:py-8 rounded-3xl bg-white shadow-xl shadow-gray-100 border-x-4 border-purple-700 p-4 flex items-center">
            <h4>Plagiarism Detection & Content Originality</h4>
          </div>
          <div className="md:px-20 md:py-8 rounded-3xl bg-white shadow-xl shadow-gray-100 border-x-4 border-purple-700 p-4 flex items-center">
            <h4>Frictionless Integrations</h4>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:w-[60%] mx-auto mt-8">
          <div className="md:px-20 md:py-8 rounded-3xl bg-white shadow-xl shadow-gray-100 border-x-4 border-purple-700 p-4 flex items-center">
            <h4>Rapid Search Engine Indexing</h4>
          </div>
          <div className="md:px-20 md:py-8 rounded-3xl bg-white shadow-xl shadow-gray-100 border-x-4 border-purple-700 p-4 flex items-center">
            <h4>Shopify Integration</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
