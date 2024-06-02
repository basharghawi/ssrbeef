"use client";
import Image from "next/image";

export default function ScrollTop() {
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className="scroll-top" onClick={scrollToTop}>
        <div className="scroll-top-wrap">
          <i>
            <Image src="/images/arrow-up.png" alt="arrow top" width={30} height={30} />
          </i>
        </div>
      </div>
  )
}