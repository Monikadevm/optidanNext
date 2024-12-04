import Image from "next/image";
import Banner from "./components/Banner";
import Partners from "./components/Partners";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";
import OptidanAi from "./components/OptidanAi";
import Speciality from "./components/Speciality";
import HowItWorks from "./components/HowItWorks";
import GetInTouch from "./components/GetInTouch";
import DidYouKnow from "./components/DidYouKnow";
import OurBlogs from "./components/OurBlogs";
import UniqueContent from "./components/UniqueContent";
import AiSeo from "./components/AiSeo";

export default function Home() {
  return (
    <>
      <Banner />
      <Partners />
      <WhyChooseUs />
      <OurServices/>
      <UniqueContent/>
      <HowItWorks/>
      <DidYouKnow/>
      <OptidanAi/>
      <Speciality/>
      <OurBlogs/> 
      <AiSeo/>
      <GetInTouch/>
     
    </>
  );
}
