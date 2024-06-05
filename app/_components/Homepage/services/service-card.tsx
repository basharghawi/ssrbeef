import Image from "next/image";
import Link from "next/link";

import "./service-card.css";

export default function ServiceCard() {
  return (
    <div className="service-card-wrap">
      <figure className="service-card">
        <div className="service-card__icon">
          <Image className="service-card__icon-bg-icon" src="/images/service-bg.png" alt="service icon" width={421} height={256} />
          <Image className="service-card__icon-main-icon" src="/images/service-icon.svg" alt="service icon" width={120} height={120} />
        </div>
        <div className="service-card__info">
          <h3>Digital Marketing</h3>
          <p>
            Start working with an company that provide everything you need to any create awareness drive
          </p>
          <Link href="/services" className="service-card__btn">
            Read more
          </Link>
          <span>01</span>
        </div>
      </figure>
    
    </div>
  )
}