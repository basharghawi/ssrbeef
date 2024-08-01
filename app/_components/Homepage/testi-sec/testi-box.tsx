import Image from "next/image";

import "./testi-box.css";
import { FunctionComponent } from "react";
import { Testimonial } from "@/app/_interfaces/testi.interface";

interface Props {
  data: Testimonial
}

const TestiBox: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className="testi-box">
      <div className="testi-box__info">
        <div className="info-img">
          <Image src="/images/testi-img1-1.png" alt="testi img" width={150} height={150} />
        </div>
        <div className="info-inner">
          <h4>
            {
              data.name
            }
          </h4>
          <span>
            {
              data.remarks
            }
          </span>
        </div>
      </div>
      <p>
        {
          data.testimony
        }
      </p>
      <div className="testi-box__rating">
        <div className="rating-star">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            src={i < data.rating ? "/images/star-filled.png" : "/images/star-empty.png"}
            alt={i < data.rating ? "filled star" : "empty star"}
            width={80}
            height={80}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default TestiBox