"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ServiceCard from "./service-card";
import "./services.css";
import { HomeSection } from "@/app/_interfaces/HomeSection.interface";

const breakPoints = {
  1200: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
  350: {
    slidesPerView: 1,
  },
}

interface Props {
  data: HomeSection[]
}

const Services: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="services">
      <div className="services-wrap">
        <div className="bg-waves">
          <div className="wave wave-bottom-left">
            <Image className="layer" src="/images/bottom-left2.png" alt="img" width={263} height={429}  />
            <Image className="layer" src="/images/bottom-left1.png" alt="img" width={367} height={263} />
          </div>
          <div className="wave wave-bottom-right">
            <Image className="layer" src="/images/bottom-right2.png" alt="img" width={326} height={372}  />
            <Image className="layer" src="/images/bottom-right1.png" alt="img" width={260} height={494} />
          </div>
        </div>
        <div className="container">
          <div className="services-caro">
            <Swiper
              navigation
              slidesPerView={3}
              // autoplay={true}
              // loop={true}
              breakpoints={breakPoints}
              speed={1500}
              modules={[Autoplay, Navigation]}
            >
              {
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard data={item} />
                  </SwiperSlide>    
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services