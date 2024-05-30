// import Image from "next/image";
import Hero from "./components/Hero/hero";
import About from "./components/about-what/about";
import ServiceSec from "./components/service-sec/service-sec";
import Services from "./components/services/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ServiceSec />
    </>
  );
}
