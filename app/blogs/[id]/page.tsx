/* eslint-disable @next/next/no-img-element */
import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";
import { BlogPayload } from "@/app/_interfaces/blog.interface";

import './blog-page.css';
import BSection from "./blog-section";

async function getBlog(id: string) {
  const response = await fetch('https://reellanceapi.reellance.com/api/Blogs/GetBlog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "id": id
    })
  });
  const data = await response.json();
  return data.payload
}

const Page = async ({params}: { params: { id: string } }) => {
  const blogData = await getBlog(params.id) as BlogPayload;
  return (
    <>
      <Breadcrumbs type="sub" 
        titleEn={blogData.titleEn} descEn={blogData.descriptionEn} 
        titleAr={blogData.titleAr} descAr={blogData.descriptionAr} 
      />
      <article className="blog-page">
        <figure className="blog-page_banner">
          <div className="banner-wrap">
            <img src={blogData.blogImage} alt={blogData.blogTag} />
          </div>
        </figure>
        {
          blogData.blogSections.map(section => (
            <BSection key={section.order} sectionDetails={section} />
          ))
        }
      </article>
    </>
  )
}

export default Page