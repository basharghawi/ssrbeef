"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.css";
import Image from "next/image";

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
    // Add scroll event when the component is loaded
    window.addEventListener('scroll', handleScroll);
    return () => {
    // Remove scroll event after the component is unmount,
    // like componentWillUnmount()
      window.removeEventListener('scroll', () => handleScroll);
    };
    // Here, we set useEffect() arguments as empty array.
    // This means useEffect() will only run once after component loaded
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
    <header className={"app-header" + (isSticky? ' sticky': '')}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <figure className="logo">
            <Link href={'/'}>
              <Image className="logo__default" src="/images/logo.png" alt="app logo" width={314} height={100} />
              <Image className="logo__sticky" src="/images/logo2.png" alt="app logo" width={314} height={100} />
            </Link>
          </figure>
          <nav className="d-flex align-items-center">
            <ul className="d-flex justify-content-end">
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
                <Image src="/images/search-white.png" alt="search btn" width={21} height={21} />
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
  );
}