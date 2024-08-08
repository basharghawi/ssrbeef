import Image from "next/image";
import Link from "next/link";

import "./footer.css";
import ScrollTop from "./scroll-top";
import SocialLinks from "../social-links/social-links";

export default function Footer() {
  return (
    <footer className="footer">
      <ScrollTop />
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-about">
            <div className="footer-about__logo">
              <Link href="/">
                <Image src="/images/ICON-400p.png" alt="logo" width={1080} height={1080} />
              </Link>
            </div>
            <p>We’re on a mission to build a better future where technology creates good jobs for everyone.</p>
          </div>
          <div className="footer-widget">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="footer-widget__col">
                  <h4>Contact</h4>
                  <ul>
                    <li>
                      <Link href="/">Installation</Link>
                    </li>
                    <li>
                      <Link href="/">Loging in</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="footer-widget__col">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <Link href="/">About us</Link>
                    </li>
                    <li>
                      <Link href="/">Services</Link>
                    </li>
                    <li>
                      <Link href="/">Projects</Link>
                    </li>
                    <li>
                      <Link href="/">Our Team</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="footer-widget__col">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <Link href="/">Contact us</Link>
                    </li>
                    <li>
                      <Link href="/">Blog</Link>
                    </li>
                    <li>
                      <Link href="/">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-3">
                <div className="footer-widget__col">
                  <h4>Subscribe</h4>
                  <form>
                    <label htmlFor="" className="visually-hidden">Subscribe</label>
                    <input type="email" name="email" id="email" placeholder="Your Email"  />
                    <button type="submit">
                      <Image src="/images/send-btn.png" alt="send" width={100} height={100} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-content__inner">
            <ul>
              <li>
                <Image src="/images/phone-footer.png" alt="phone" width={100} height={100} />
                <a href="tel:+962791234567">+962 79 123 4567</a>
              </li>
              <li>
                <Image src="/images/map-footer.png" alt="phone" width={100} height={100} />
                Amman, Jordan
              </li>
            </ul>
          </div>
          <SocialLinks />
        </div>
        <div className="footer-cr">
          <p>Copyright © 2024. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}