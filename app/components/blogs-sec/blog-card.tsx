
import Image from "next/image";
import "./blog-card.css";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className="blog-card">
      <article>
        <div className="blog-card__img">
          <Link href="/blog">
            <Image src="/images/post-img1-1.jpg" alt="post img" width={1024} height={576} />
          </Link>
        </div>
        <div className="blog-card__info">
          <span className="info__category">Optimization</span>
          <h3>Impactful Use</h3>
          <p>From site work to custom brick and stone masonry, Gardeny can install</p>
        </div>
        <div className="blog-card__bottom">
          <div className="bottom__post-author">
            <div className="post-author__img">
              <Image src="/images/author-img.png" alt="post author img" width={35} height={35} />
            </div>
            <span>Bashar Elghawi</span>
          </div>
          <div className="bottom__post-date">
            <span>12</span>
            Jul
          </div>
        </div>
      </article>
    </div>
  )
}