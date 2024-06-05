"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
import MobileHeader from "./mobile-header";

const navData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
  {
    name: "Contact us",
    path: "/contact",
  }
]

export default function Header() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let top = 60

    if (window.scrollY >= top) {
      setSticky(true);
    } else {
      setSticky(false)
    }
  };

  return (
    <>
      <header className={"app-header" + (isSticky? ' sticky': '')}>
        <div className="container">
          <div className="header-desktop">
            <figure className="logo">
              <Link href={'/'}>
                <Image className="logo__default" src="/images/logo-without-bg2.png" alt="app logo" width={314} height={100} />
                <Image className="logo__sticky" src="/images/ICON-400p.png" alt="app logo" width={314} height={100} />
              </Link>
            </figure>
            <nav>
              <ul>
                {
                  navData.map(({ name, path }) => (
                    <li key={name}>
                      <Link href={path}>{name}</Link>
                    </li>
                  ))
                }
              </ul>
              <div className="menu-right">
                <span className="search-btn">
                  <svg viewBox="0 0 24 24" fill="none"><g> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" strokeWidth="2.4"></path> </g></svg>
                </span>
                {/* <div className="mini-cart">
                  <a href="javascript:void(0);">
                    <div className="mini-cart__img">
                      <Image src="/images/cart.svg" alt="cart icon" width={21} height={21} />
                    </div>
                    <span>3</span>
                  </a>
                  <div className="mini-cart__dropdown">

                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
}