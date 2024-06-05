// import Image from "next/image";
import Hero from "./_components/Homepage/Hero/hero";
import Agency from "./_components/Homepage/about-agency/agency";
import About from "./_components/Homepage/about-what/about";
import Blogs from "./_components/Homepage/blogs-sec/blogs";
import CheckWebsite from "./_components/Homepage/check-website/check";
import Facts from "./_components/Homepage/facts/facts";
import Prices from "./_components/Homepage/prices-sec/prices";
import Process from "./_components/Homepage/process/process";
import ServiceSec from "./_components/Homepage/service-sec/service-sec";
import Services from "./_components/Homepage/services/services";
import OurTeam from "./_components/Homepage/team-sec/team";
import Testi from "./_components/Homepage/testi-sec/testi";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ServiceSec />
      <CheckWebsite />
      <Process />
      <Agency />
      <Blogs />
      <OurTeam />
      <Facts />
      <Testi />
      <Prices />
    </>
  );
}
