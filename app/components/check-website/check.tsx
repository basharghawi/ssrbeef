/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import "./check.css"

export default function CheckWebsite() {
  return (
    <section className="check-website">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="check-website__sec-title">
              <span>Website's SEO</span>
              <h2>CHECK YOUR</h2>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8">
            <div className="check-website__form-wrap">
              <form>
                <fieldset>
                  <label htmlFor="url" className="visually-hidden">Your Website URL</label>
                  <input type="text" name="url" id="url" placeholder="Your Website URL" required />
                  <span>01</span>
                  <i>
                  <Image src="/images/field-icon.png" alt="arrow" width={32} height={27} />
                  </i>
                </fieldset>
                <div className="form-wrap__form-btn">
                  <button type="submit">
                    Next
                    <i>
                      <Image src="/images/right-arrow-long.png" alt="arrow" width={30} height={30} />
                    </i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}