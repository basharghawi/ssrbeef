import Image from "next/image"
import Link from "next/link"

import "./blog-item.css";

export const BlogItem = () => {
  return (
    <article className="blog-item">
      <div className="blog-item__img">
        <Link href="blogs/1">
          <Image src="/images/post-list-img9-1.jpg" alt="post img" width={1024} height={567} />
        </Link>
      </div>
      <div className="blog-item__info">
        <h2>
          <Link href="blogs/1">
            SEO Machine
          </Link>
        </h2>
        <p>From site work to custom brick and stone masonry, Gardeny can install your project with its own talented artis</p>
        <div className="info-bottom">
          <div className="info-bottom__content">
            <div className="content-author">
              <Image src="/images/author-img.png" alt="author name" width={35} height={35} />
              <span>Bobcorn</span>
            </div>
            <div className="content-date">July 12, 2019</div>
          </div>
          <Link href="blogs/1" className="info-bottom__read-more">
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}