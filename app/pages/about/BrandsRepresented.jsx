"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const BrandsRepresented = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const blogsData = [
    {
      id: 1,
      img: "/brands-represented1.svg",
      width: "187px",
      height: "80px",
    },
    {
      id: 2,
      img: "/brands-represented2.svg",
      width: "166px",
      height: "71px",
    },
    {
      id: 3,
      img: "/brands-represented3.svg",
      width: "174px",
      height: "54px",
    },
    {
      id: 4,
      img: "/brands-represented4.svg",
      width: "182px",
      height: "48px",
    },
  ];

  return (
    <div className="py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto "
      >
        <h2 className="text-center text-3xl md:text-[40px] mb-4 md:mb-5 font-semibold md:w-[60%] mx-auto md:leading-[50px] ">
          Some of the brands JP has represented over two decades
        </h2>
        <Slider
          {...settings}
          className="w-[90%] md:w-full flex py-5 min-h-[150px]"
        >
          {blogsData.map(({ id, img, width, height }) => (
            <div
              className=" bg-white rounded-3xl p-5 ml-[25%] md:mx-5 max-w-[200px] min-h-[100px] flex items-center justify-center"
              key={id}
            >
              <img
                src={img}
                alt="optidan brands represented"
                className={`w-${width} h-${height} `}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default BrandsRepresented;
