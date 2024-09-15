import { Breadcrumbs } from "@/app/_components/breadcrumbs/breadcrumbs";

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
  const blogData = await getBlog(params.id);

  return (
    <>
      <Breadcrumbs type="sub" title={blogData.titleEn} desc={blogData.descriptionEn} />
    </>
  )
}

export default Page