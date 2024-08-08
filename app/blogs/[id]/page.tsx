import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";

async function getBlog() {
  const response = await fetch('https://localhost:44388/api/Blogs/GetBlog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "id": "88403273-3f4d-4135-85e6-d40fe7f22cd8"
    })
  });
  const data = await response.json();
  return data.payload
}

export default async function Page() {
  const blogData = await getBlog();

  return (
    <>
      <Breadcrumbs type="sub" title={blogData.titleEn} desc={blogData.descriptionEn} />
    </>
  )
}