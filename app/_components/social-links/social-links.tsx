import Image from "next/image"
import './social-links.css'

const SocialLinks = () => {
  return (
    <div className="scl-lnks">
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>
          <Image
            src="/images/youtube-icon2.svg"
            alt="youtube"
            width={20}
            height={20}
          />
        </i>
      </a>
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>
          <Image
            src="/images/instagram-icon2.svg"
            alt="instagram"
            width={20}
            height={20}
          />
        </i>
      </a>
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>
          <Image
            src="/images/twitter-icon2.svg"
            alt="twitter"
            width={20}
            height={20}
          />
        </i>
      </a>
    </div>
  )
}

export default SocialLinks