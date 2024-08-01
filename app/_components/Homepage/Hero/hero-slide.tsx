/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import "./hero-slide.css";
import { FunctionComponent } from "react";
import { HomeSection } from "@/app/_interfaces/HomeSection.interface";
import { useLang } from "@/app/_contexts/LangContext";
interface Props {
  data: HomeSection
}

const HeroSlide: FunctionComponent<Props> = ({ data }) => {
  const { lang } = useLang();

  return (
    <div className="hero-slide">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="hero-slide__info">
              <h2>
                {
                  lang === 'ltr'? data.titleEn : data.titleAr
                }
              </h2>
              <p>
                {lang === 'ltr'? data.descriptionEn : data.descriptionAr}
              </p>
              <div className="info-btns">
                {
                  data.buttons.map((btn, index) => (
                    <Link key={index} className="info-btns__filled" href="/">
                      {
                        lang === 'ltr'? btn.titleEn : btn.titleAr
                      }
                    </Link>
                  ))
                }
                {/* <Link className="info-btns__bordered" href="/contact">Contact Us</Link> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="hero-slide__img">
              <img src={data.imageUri} alt="slide 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlide