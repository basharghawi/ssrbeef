/* eslint-disable @next/next/no-img-element */
"use client"

import { useLang } from "@/app/_contexts/LangContext"
import { BlogSection } from "@/app/_interfaces/blog.interface";
import { FunctionComponent } from "react";

interface Props {
  sectionDetails: BlogSection
}

const BSection: FunctionComponent<Props> = ({sectionDetails}) => {
  const { lang } = useLang();

  // function addBreakAfterDot(input: string) {
  //   // Split the input at the dot followed by a non-whitespace character
  //   return input.split(/\.([^\s])/g).map((part, index) =>
  //     index % 2 === 0 ? part : <>.<span />{part}</>
  //   );
  // }
  return (
    <section className="blog-page_section">
      <p>
        {
          lang === 'ltr'? sectionDetails.contentEn : sectionDetails.contentAr
        }
      </p>
      <div className="section-gallery">
        <div className="row">
          {
            sectionDetails.blogSectionImages.map((img, i) => (
              <div key={i} className="col-md-6 col-sm-6 col-lg-6">
                <img src={img} alt="post img" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BSection