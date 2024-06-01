/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

import "./price-card.css";

export default function PricesCard({cardType}) {
  return (
    <div className={"prices-card " + cardType.toLowerCase()}>
      <span className="prices-card__icon">
        <i>
          <Image src="/images/cube-icon.png" alt="cube" width={18} height={18} />
        </i>
        {cardType}
      </span>
      <h3>
        <sup>$</sup>
        39
        <small>/mo</small>
      </h3>
      <ul className="prices-card__list">
        <li>
          <div className="list-info">
            <strong> 25 Analytics </strong> 
            Campaign
          </div>
        </li>
        <li>
          <div className="list-info">
            <strong> 25 Analytics </strong> 
            Campaign
          </div>
        </li>
        <li>
          <div className="list-info">
            <strong> 25 Analytics </strong> 
            Campaign
          </div>
        </li>
        <li>
          <div className="list-info">
            <strong> 25 Analytics </strong> 
            Campaign
          </div>
        </li>
        <li>
          <div className="list-info">
            <strong> 25 Analytics </strong> 
            Campaign
          </div>
        </li>
      </ul>
      <Link href="/prices">Buy Now</Link>
      <p>
        By clicking you're accepting 
        <Link href="/terms-and-conditions"> Terms of use </Link>
      </p>
    </div>
  )
}