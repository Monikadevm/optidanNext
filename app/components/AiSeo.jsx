"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const AiSeo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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

  const seoSolution = [
    {
      id: 1,
      img: "/jp-tucker.png",
      detail:
        "Optidan AI was born from an internal retail challenge we had, we achieved remarkable results that saved us both time, and funding, so we knew we had to share the secret with fellow online retailers—propelling them to page one.",
      uName: "JP Tucker",
      designation: "Co-Founder Optidan AI",
    },
    {
      id: 2,
      img: "/simon-beard.png",
      detail:
        "Operational efficiency should be all about leveraging AI to automate things. Every day I see more and more opportunities to go faster and faster and get more integrated. The amount of opex operational expenditure that can be cut is pretty phenomenal.",
      uName: "Simon Beard",
      designation: "Founder, Culture Kings, and Board Member",
    },
    {
      id: 3,
      img: "/simon-beard.png",
      detail:
        "Operational efficiency should be all about leveraging AI to automate things. Every day I see more and more opportunities to go faster and faster and get more integrated. The amount of opex operational expenditure that can be cut is pretty phenomenal.",
      uName: "Name 3",
      designation: "Founder, Culture Kings, and Board Member",
    },
    {
      id: 4,
      img: "/simon-beard.png",
      detail:
        "Operational efficiency should be all about leveraging AI to automate things. Every day I see more and more opportunities to go faster and faster and get more integrated. The amount of opex operational expenditure that can be cut is pretty phenomenal.",
      uName: "Name 4 ",
      designation: "Founder, Culture Kings, and Board Member",
    },
  ];

  return (
    <div className="container bg-[#3E308A] p-10 md:rounded-3xl  md:mx-auto relative  md:h-[630px] mb-5 md:mb-10 seo-ai">
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="h-12 w-12 md:h-24 md:w-24 rounded-full bg-[#9F4DA6] flex items-center justify-center p-1 md:p-3">
            <img src="/quote.png" alt="" />
          </div>
          <h3 className="text-3xl md:text-[40px] text-white md:w-[60%] mt-4 md:mt-20">
            Automated AI SEO solutions is here
          </h3>
        </div>

        <div className="w-full md:w-[55%] -mr-32">
          <Slider {...settings} className=" grid gap-8 py-5 ml-auto">
            {seoSolution.map(({ id, img, detail, uName, designation }) => (
              <div
                className="seo-ai-card bg-white rounded-2xl first:mr-20 h-[505px] "
                key={id}
              >
                <img src={img} alt="" />
                <p className="p-4 text-sm">{detail}</p>
                <div className="p-4 text-xs flex justify-between items-center">
                  <p>
                    <span className="text-lg">{uName} </span> {designation}
                  </p>
                  <span className="flex text-yellow-500 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AiSeo;
