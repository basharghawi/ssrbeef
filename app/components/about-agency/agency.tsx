import Image from "next/image";
import Link from "next/link";

import "./agency.css";

export default function Agency() {
  return (
    <>
      <section className="agency">
        <div className="bg-waves">
          <div className="wave wave-top-left">
            <Image className="layer" src="/images/top-left2.png" alt="img" width={263} height={429}  />
            <Image className="layer" src="/images/top-left1.png" alt="img" width={367} height={263} />
          </div>
          <div className="wave wave-bottom-right">
            <Image className="layer" src="/images/bottom-right2.png" alt="img" width={326} height={372}  />
            <Image className="layer" src="/images/bottom-right1.png" alt="img" width={260} height={494} />
          </div>
        </div>
        <div className="container">
          <div className="agency__top-wrap">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-6">
                <Image src="/images/about-mckp2.png" alt="about agency" width={550} height={282} quality={50} />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h2>The best agency</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra nulla id augue auctor placerat.</p>
                <Link href="/about">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="agency-imgs">
        <div className="container">
          <div className="row">
            <div className="co-12 col-md-6 col-lg-6">
              <div className="agency-imgs__with-text">
                <h2>
                  Already
                  <br />
                  <span>ten year</span>
                  <br />
                  in the game
                </h2>
                <p>
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit, sed do
                </p>
              </div>
            </div>
            <div className="co-12 col-md-6 col-lg-6">
              <Image className="agency-imgs__no-text" src="/images/text-img.jpg" alt="agency img" width={585} height={585} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}