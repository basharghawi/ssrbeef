/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image"
import Link from "next/link"

import "./blog-item.css";
import { FunctionComponent } from "react";
import { BlogPost } from "@/app/_interfaces/blogs.interface";
import { useLang } from "@/app/_contexts/LangContext";

interface Props {
  data: BlogPost
}

export const BlogItem:FunctionComponent<Props> = ({ data }) => {
  const { lang } = useLang();

  return (
    <article className="blog-item">
      <div className="blog-item__img">
        <Link href={"blogs/" + data.id}>
          <img src={data.blogImage} alt="post img" />
        </Link>
      </div>
      <div className="blog-item__info">
        <h2>
          <Link href={"blogs/" + data.id}>
            {
              lang === 'ltr'? data.titleEn : data.titleAr
            }
          </Link>
        </h2>
        <p>
          {
            lang === 'ltr'? data.descriptionEn : data.descriptionAr
          }
        </p>
        <div className="info-bottom">
          <div className="info-bottom__content">
            <div className="content-author">
              <Image src="/images/author-img.png" alt="author name" width={35} height={35} />
              <span>Bobcorn</span>
            </div>
            <div className="content-date">July 12, 2019</div>
          </div>
          <Link href={"blogs/" + data.id} className="info-bottom__read-more">
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}