import Image from "next/image";
import Link from "next/link";

import "./about.css"

export default function About() {
  return (
    <section className="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <Image className="about-img" src="/images/about-mckp1.png" alt="what we do" width={549} height={557} />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="about-desc">
              <h3>What we do?</h3>
              <p>
                Praesent fermentum elit sed libero egestas ullamcorper. Mauris pharetra nulla id augue auctor placerat. Proin tortor leo, convallis a mi a, feugiat aliquam dui. Vestibulum cursus auctor nisl non vulputate.
              </p>
              <div className="about-desc__btns">
                <Link href="/about" className="about-desc__btns-more">
                  <i>
                    <Image src="/images/right-arrow-long2.png" alt="arrow" width={30} height={30} />
                  </i>
                  Read More
                  <i>
                    <Image src="/images/right-arrow-long.png" alt="arrow" width={30} height={30} />
                  </i>
                </Link>
                <Link href="/contact" className="about-desc__btns-contact">
                  Contact Us                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}