import Image from "next/image";
import Link from "next/link";

import "./service-card.css";
import { HomeSection } from "@/app/_interfaces/HomeSection.interface";
import { FunctionComponent } from "react";
import { useLang } from "@/app/_contexts/LangContext";

interface Props {
  data: HomeSection
}

const ServiceCard: FunctionComponent<Props> = ({ data }) => {
  const { lang } = useLang();
  
  return (
    <div className="service-card-wrap">
      <figure className="service-card">
        <div className="service-card__icon">
          <Image className="service-card__icon-bg-icon" src="/images/service-bg.png" alt="service icon" width={421} height={256} />
          <Image className="service-card__icon-main-icon" src="/images/service-icon.svg" alt="service icon" width={120} height={120} />
        </div>
        <div className="service-card__info">
          <h3>
            {
              lang === 'ltr'? data.titleEn : data.titleAr
            }
          </h3>
          <p>
            {
              lang === 'ltr'? data.descriptionEn : data.descriptionAr
            }
          </p>
          <Link href="/services" className="service-card__btn">
            {
              lang === 'ltr'? data.buttons[0].titleEn : data.buttons[0].titleAr
            }
          </Link>
          <span>01</span>
        </div>
      </figure>
    </div>
  )
}

export default ServiceCard