import Image from "next/image";

import "./prices.css";
import RfqForm from "./Rfq-form";
// import { PricesCard } from "./price-card";

async function GetRequestRfq() {
  const response = await fetch('https://reellanceapi.reellance.com/api/Rfq/GetRequestTypes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
  const data = await response.json();
  return data.payload
}

async function Prices() {
  const rfqTypes = await GetRequestRfq()
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
      <div className="container relative">
        <div className="sec-title">
          <h2>
            Request for Quote
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="prices-sec__prices">
          {/* <div className="row align-items-center">
            <div className="col-md-4 col-sm-6 col-lg-4">
              <PricesCard cardType={'Basic'} />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4">
              <PricesCard cardType={'Ultra'} />
            </div>
            <div className="col-md-4 col-sm-6 col-lg-4">
              <PricesCard cardType={'Pro'} />
            </div>
          </div> */}
          <RfqForm rfqTypes={rfqTypes} />
        </div>
      </div>
    </section>
  )
}

export default Prices