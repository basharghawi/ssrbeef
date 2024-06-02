import Image from "next/image";

import "./prices.css";
import { PricesCard } from "./price-card";

export default function Prices() {
  return (
    <section className="prices-sec">
      <div className="bg-waves">
        <div className="wave wave-top-left">
          <Image className="layer" src="/images/top-left2.png" alt="img" width={263} height={429}  />
          <Image className="layer" src="/images/top-left1.png" alt="img" width={367} height={263} />
        </div>
        <div className="wave wave-top-right">
          <Image className="layer" src="/images/top-right2.png" alt="img" width={263} height={429}  />
          <Image className="layer" src="/images/top-right1.png" alt="img" width={367} height={263} />
        </div>
        <div className="wave wave-bottom-right">
          <Image className="layer" src="/images/bottom-right2.png" alt="img" width={326} height={372}  />
          <Image className="layer" src="/images/bottom-right1.png" alt="img" width={260} height={494} />
        </div>
      </div>
      <div className="container">
        <div className="sec-title">
          <h2>
            <span>Our</span>
            Pricing
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="prices-sec__prices">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-6 col-lg-4">
              <PricesCard cardType={'Basic'} />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4">
              <PricesCard cardType={'Ultra'} />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4">
              <PricesCard cardType={'Pro'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}