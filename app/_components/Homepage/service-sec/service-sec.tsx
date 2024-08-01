import Image from "next/image";
import Link from "next/link";

import "./service-sec.css";

const ServiceSec = () => {
  return (
    <section className="service-sec">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="service-sec__box">
            <div className="service-sec__box-img">
              <Image src="/images/service-img2-1.jpg" alt="hashtag" width={1430} height={1080} />
            </div>
            <div className="service-sec__box-info">
              <i>
                <Image src="/images/service-sec-icon1.png" alt="anal" width={52} height={60} />
              </i>
              <h4>Web Analytics</h4>
              <p>Praesent fermentum elit sed libero egestas ullamcorper. Mauris pharetra nulla id augue auctor</p>
              <Link href="/services">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="service-sec__box">
            <div className="service-sec__box-img">
              <Image src="/images/service-img2-2.jpg" alt="announce" width={1430} height={1080} />
            </div>
            <div className="service-sec__box-info">
              <i>
                <Image src="/images/service-sec-icon2.png" alt="anal" width={52} height={60} />
              </i>
              <h5>“ Praesent fermentum elit sed libero egestas ullamcorper. Mauris pharetra nulla id augue auctor ”</h5>
              <span>Jason Statham</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSec