"use client";

import { FunctionComponent } from "react";
// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./hero.css";
import HeroSlide from "./hero-slide";
import { HomeSection } from "@/app/_interfaces/HomeSection.interface";


const autoplay = {
  delay: 5000
}

interface Props {
  data: HomeSection[]
}

const Hero: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="hero relative">
      <figure>
        <Swiper
          navigation
          slidesPerView={1}
          autoplay={autoplay}
          loop={true}
          speed={1500}
          modules={[Autoplay, Navigation]}
        >
          {
            data.map((item, index) => (
              <SwiperSlide key={index}>
                <HeroSlide data={item} />
              </SwiperSlide>    
            ))
          }
        </Swiper>
      </figure>
    </section>
  );
}

export default Hero