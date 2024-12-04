"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const OurBlogs = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      img: "/blog1.png",
      title: "What is SEO and How Does it work? A Comprehensive Guide",
      description:
        "Search Engine Optimization (SEO) is the art and science of enhancing a website's visibility on search engines like Google. Its primary role in digital marketing is to attract organic traffic by improving a site's ranking in search engine results pages (SERPs). ",
    },
    {
      id: 2,
      img: "/blog2.png",
      title:
        "Content Scale Solutions: How Generative AI Can Help Grow Your Content Library",
      description:
        "In today's digital age, generative AI is transforming how content is created and managed. This cutting-edge technology uses algorithms to produce creative outputs like text, images, and videos, reducing the time and effort traditionally required for content creation.",
    },
    {
      id: 3,
      img: "/blog3.png",
      title: "How Do I Do SEO for My Website? Step-by-Step Guide",
      description:
        "How Do I Do SEO for My Website? Step-by-Step Guide” can set you on the right path to improving online visibility. Search Engine Optimization, or SEO, is the practice of enhancing your website's presence in search engine results.",
    },
  ];

  return (
    <div className="main-bg2 py-10 md:py-20">
      <div className="container mx-auto ">
        <h2 className="text-center text-3xl md:text-[40px] mb-4 font-semibold">
          Our Blogs
        </h2>
        <Slider {...settings} className="!w-[90%] md:w-full grid md:gap-8 py-5">
          {blogsData.map(({ id, img, title, description }) => (
            <div
              className=" bg-white md:shadow-xl md:rounded-xl p-5 our-blog-card mx-0 md:mx-5"
              key={id}
            >
              <img src={img} alt={title} className="w-full" />
              <h3 className="text-xl font-semibold my-3">{title}</h3>
              <p className="">{description}</p>
              <button className="text-primary flex items-center font-semibold mt-4">
                Read more <FaArrowRight className="ml-3" />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurBlogs;
