import Image from "next/image";

import "./testi-box.css";

export default function TestiBox() {
  return (
    <div className="testi-box">
      <div className="testi-box__info">
        <div className="info-img">
          <Image src="/images/testi-img1-1.png" alt="testi img" width={150} height={150} />
        </div>
        <div className="info-inner">
          <h4>Ann Statham</h4>
          <span>CEO Pranklin Agency</span>
        </div>
      </div>
      <p>They have great service, quality products and we trust them. We value a local relationship and the impact it has on our community.</p>
      <div className="testi-box__rating">
        <div className="rating-star">
          <Image src="/images/star-filled.png" alt="star" width={80} height={80} />
          <Image src="/images/star-filled.png" alt="star" width={80} height={80} />
          <Image src="/images/star-filled.png" alt="star" width={80} height={80} />
          <Image src="/images/star-filled.png" alt="star" width={80} height={80} />
          <Image src="/images/star-empty.png" alt="star" width={80} height={80} />
        </div>
      </div>
    </div>
  )
}