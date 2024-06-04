import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MobileHeader() {
  const [modal, setModal] = useState(false);

  function toggleDialog() {
    setModal(!modal)
  }
  
  return (
    <div className="mobile-header">
      <div className="container">
        <div className="mobile-header-wrap">
          <figure className="logo">
            <Link href={'/'}>
              <Image className="logo__default" src="/images/logo.png" alt="app logo" width={314} height={100} />
            </Link>
          </figure>
          <div className="menu-right">
            <div className="menu-right__btn" onClick={toggleDialog}>
              <svg viewBox="0 0 24 24" className="ham-menu"><g> <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#fff"></path> </g></svg>
              <svg viewBox="0 0 24 24" fill="none" className="ham-close"><g id="SVGRepo_iconCarrier"> <g> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></g></svg>
            </div>
            <div className="menu-right__search-btn">
              <svg viewBox="0 0 24 24" fill="none"><g> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" strokeWidth="2.7"></path> </g></svg>
            </div>
          </div>
        </div>
      </div>
      <div className={"mobile-header__menu-modal" + (modal ? ' active' : '')}>
        <div className="menu-modal__logo">
          <Link href={'/'}>
            <Image className="logo__sticky" src="/images/logo2.png" alt="app logo" width={314} height={100} />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}