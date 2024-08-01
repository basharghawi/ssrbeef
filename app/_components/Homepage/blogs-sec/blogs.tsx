"use client";

// Swiper components, modules and styles
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import BlogCard from "./blog-card"
import "./blogs.css"
import Link from "next/link";
import { HomeSection } from "@/app/_interfaces/HomeSection.interface";
import { FunctionComponent } from "react";
import { BlogPost } from "@/app/_interfaces/blogs.interface";

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
  data: BlogPost[]
}

const Blogs:FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="blogs-sec">
      <div className="container">
        <div className="blogs-sec__sec-title">
          <h2>
            <span>LATEST</span>
            BLOG
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="blogs-sec__blog-cards">
          <Swiper
            navigation
            slidesPerView={3}
            spaceBetween={40}
            breakpoints={breakPoints}
            speed={1000}
            modules={[Navigation]}
          >
            {
              data.map((blog) =>
                <SwiperSlide key={blog.id}>
                  <BlogCard data={blog} />
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
        <div className="blogs-sec__view-all">
          <Link href="/blog">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs