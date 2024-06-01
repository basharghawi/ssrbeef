// import Image from "next/image";
import Hero from "./components/Hero/hero";
import Agency from "./components/about-agency/agency";
import About from "./components/about-what/about";
import Blogs from "./components/blogs-sec/blogs";
import CheckWebsite from "./components/check-website/check";
import Facts from "./components/facts/facts";
import Process from "./components/process/process";
import ServiceSec from "./components/service-sec/service-sec";
import Services from "./components/services/services";
import OurTeam from "./components/team-sec/team";

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
    </>
  );
}
