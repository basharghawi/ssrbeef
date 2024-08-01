"use client"

import Image from "next/image";

// Swiper components, modules and styles
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./testi.css"
import TestiBox from "./testi-box";
import { FunctionComponent } from "react";
import { Testimonial } from "@/app/_interfaces/testi.interface";

interface Props {
  data: Testimonial[]
}

const Testi: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="testi-sec">
      <div className="testi-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-6">
              <div className="testi-sec__caro">
                <div className="caro-slides">
                  <Swiper
                    navigation
                    speed={1000}
                    modules={[Navigation]}
                  >
                    {
                      data.map((item, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <TestiBox data={item} />
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6">
              <div className="testi-sec__img">
                <Image src="/images/testi-mckp.jpg" alt="testi" width={570} height={490} quality={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testi