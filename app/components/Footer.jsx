import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-bg pt-14">
      <div className="container mx-auto grid md:grid-cols-3 gap-4 px-6 md:px-0">
        <div>
          <Image src={"/logo.svg"} width={294} height={98} alt="optidan" />
          <p className="my-5 md:pr-20">
            Experience unmatched AI SEO optimisation with Optidan’s seamless
            technology. Our AI services optimise your Shopify store and
            e-commerce site day and night, delivering rapid results 20x faster,
            95% time savings, and a 14%+ boost in conversions at a lower cost.
          </p>

          <ul className="flex mb-5">
            <li className="mr-4">
              <FaFacebookSquare className=" text-3xl cursor-pointer hover:text-fuchsia-800" />
            </li>
            <li className="mr-4">
              <FaTwitter className=" text-3xl cursor-pointer hover:text-fuchsia-800" />
            </li>
            <li className="mr-4">
              <FaYoutube className=" text-3xl cursor-pointer hover:text-fuchsia-800" />
            </li>
            <li className="mr-4">
              <FaInstagram className=" text-3xl cursor-pointer hover:text-fuchsia-800" />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-3xl border-b border-white footer-heading-border relative py-4 md:w-[90%]">
            Quick Links
          </h4>
          <ul className="mt-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="mb-10 md:mb-0">
          <h4 className="text-3xl border-b border-white footer-heading-border relative py-4 md:w-[90%]">
            Keep In Touch
          </h4>
          <Link href={""} className="flex items-center mt-5 mb-3">
            <FaMapMarkerAlt className="mr-2 text-xl" /> Level 1/11 York St,
            Sydney 2000
          </Link>
          <Link href={""} className="flex items-center mb-3">
            <FaPhoneAlt className="mr-2 text-xl" /> +61 451 851 810
          </Link>
          <Link
            href={"mainlto:Info@optidan.com"}
            className="flex items-center mb-3"
          >
            <FaEnvelope className="mr-2 text-xl" /> Info@optidan.com
          </Link>
        </div>
      </div>
      <p className="text-center border-t border-[#474068] mb-0 py-3">
        &copy; copyright by ai Optidan
      </p>
    </div>
  );
};

export default Footer;
