import Image from "next/image";

import "./team-box.css"

export default function Teambox() {
  return (
    <div className="team-info__team-box">
      <div className="team-box__img">
        <div className="img-wrap">
          <Image
            src="/images/team-img1-1.png"
            alt="Mattew"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="team-box__info">
        <h3>Matthew Hunter</h3>
        <span>Marketing Head</span>
        <div className="info__scl-lnks">
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <Image
                src="/images/youtube-icon.svg"
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
                src="/images/instagram-icon.svg"
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
                src="/images/twitter-icon.svg"
                alt="twitter"
                width={20}
                height={20}
              />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
