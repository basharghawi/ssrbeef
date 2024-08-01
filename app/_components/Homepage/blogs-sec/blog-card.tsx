import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import "./blog-card.css";
import { BlogPost } from "@/app/_interfaces/blogs.interface";
import { useLang } from "@/app/_contexts/LangContext";
import FormatedDate from "@/app/_utils/formatedDate";

interface Props {
  data: BlogPost
}

const BlogCard: FunctionComponent<Props> = ({ data }) => {
  const { lang } = useLang();

  return (
    <div className="blog-card">
      <article>
        <div className="blog-card__img">
          <Link href={'/blogs/' + data.id}>
            <Image src="/images/post-img1-1.jpg" alt="post img" width={1024} height={576} />
          </Link>
        </div>
        <div className="blog-card__info">
          <span className="info__category">
            {
              data.blogTag
            }
          </span>
          <h3>
            {
              lang === 'ltr'? data.titleEn : data.titleAr
            }
          </h3>
          <p>
            {
              lang === 'ltr'? data.descriptionEn : data.descriptionAr
            }
          </p>
        </div>
        <div className="blog-card__bottom">
          <div className="bottom__post-author">
            <div className="post-author__img">
              <Image src="/images/author-img.png" alt="post author img" width={35} height={35} />
            </div>
            <span>
              {data.createdBy}
            </span>
          </div>
          <div className="bottom__post-date">
            <FormatedDate dateString={data.createdOn} />
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogCard