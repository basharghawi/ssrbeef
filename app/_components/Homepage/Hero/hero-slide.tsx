import Image from "next/image";
import Link from "next/link";

import "./hero-slide.css";

export default function HeroSlide() {
  return (
    <div className="hero-slide">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="hero-slide__info">
              <h2>Having a <br /> plan</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
              <div className="info-btns">
                <Link className="info-btns__filled" href="/">Read More</Link>
                <Link className="info-btns__bordered" href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="hero-slide__img">
              <Image src="/images/slide1-mckp1.png" alt="slide 1" width={740} height={547} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}