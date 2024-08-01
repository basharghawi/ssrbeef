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

async function getHome() {
  const response = await fetch('https://localhost:44388/api/Home/Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
  const data = await response.json();
  return data.payload
}


export default async function Home() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // for dev only
  const sections = await getHome();
  // console.log(getHomepage)

  return (
    <>
      <Hero data={sections.carousel} />
      <Services data={sections.services} />
      <About data={sections.whatWeDo} />
      <ServiceSec />
      {/* <CheckWebsite /> change to subscribe */}
      <Process />
      {/* <Agency /> */}
      <Blogs data={sections.blogs} />
      <OurTeam data={sections.ourTeam} />
      <Facts data={sections.statistics} />
      <Testi data={sections.testimonialItems} />
      <Prices />
    </>
  );
}
