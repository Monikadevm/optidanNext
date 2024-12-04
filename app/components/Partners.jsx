import Image from "next/image";
import React from "react";

const Partners = () => {
  const partners = [
    { id: 1, img: "/partners1.png", width: "150", height: "75" },
    { id: 2, img: "/partners2.png", width: "160", height: "57" },
    { id: 3, img: "/partners3.png", width: "134", height: "70" },
    { id: 4, img: "/partners4.png", width: "86", height: "86" },
    { id: 5, img: "/partners5.png", width: "129", height: "95" },
  ];

  return (
    <div className="partners-bg py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center text-center">
          <p className="mb-5 flex items-center justify-center text-md">
            <span className="mr-5">trusted by 20,000+ clients</span>
            <Image src="/trusted-partners-stars.png" width={78} height={13} />
          </p>
          <h2 className="text-4xl font-bold mb-10">From A Partnership</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center px-5">
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
        </div>
      </div>
    </div>
  );
};

export default Partners;
