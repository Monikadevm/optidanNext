import OurBlogs from "@/app/components/OurBlogs";
import AboutBanner from "./AboutBanner";
import AboutPartners from "./AboutPartner";
import InnovativeLeader from "./InnovativeLeader";
import ThreeSections from "./ThreeSections";
import OptidanAiFuture from "./OptidanAiFuture";
import BrandsRepresented from "./BrandsRepresented";

const page = () => {
  return (
    <>
      <AboutBanner />
      <InnovativeLeader />
      <AboutPartners />
      <ThreeSections />
      <OptidanAiFuture />
      <BrandsRepresented />
      <OurBlogs />
    </>
  );
};

export default page;
