"use client";

// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./hero.css";
import HeroSlide from "./hero-slide";

const autoplay = {
  delay: 5000
}

export default function Hero() {
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
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
        </Swiper>
      </figure>
    </section>
  );
}