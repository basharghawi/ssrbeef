
import Image from "next/image";
import Link from "next/link";
import { BlogItem } from "../_components/blog-item/blog-item";
import { Breadcrumbs } from "../_components/breadcrumbs/breadcrumbs";
import "./blogs.css";
import { BlogPost } from "../_interfaces/blogs.interface";

async function getBlogs() {
  const response = await fetch('https://reellanceapi.reellance.com/api/Blogs/GetBlogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
  const data = await response.json();
  return data.payload as BlogPost[]
}

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <>
      <Breadcrumbs type="landing" title="Blogs"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <section className="blogs-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-9">
              {
                // Array.from({ length: 5 }, (v, i) =>
                //   <BlogItem key={i} />
                // )
                blogs.map(blog => (
                  <BlogItem key={blog.id} data={blog} />
                ))
              }
            </div>
            <div className="col-md-12 col-sm-12 col-lg-3">
              <aside>
                <form className="aside__search-form">
                  <label htmlFor="search" className="visually-hidden">Search</label>
                  <input type="text" name="search" id="search" placeholder="Search..." />
                  <button type="submit">
                    <Image src="/images/search-dark-blue.svg" alt="Search icon" width={40} height={40} />
                  </button>
                </form>
                <div className="aside__widget">
                  <h3>Recent Posts</h3>
                  <Link href="/blogs/3" className="widget__mini-posts">
                    <div className="mini-posts__img">
                      <Image src="/images/rcnt-img1-1.jpg" alt="rcnt" width={140} height={140} />
                    </div>
                    <div className="mini-posts__info">
                      <h4>Analyse Logs</h4>
                      <span>Optimization</span>
                    </div>
                  </Link>
                  <Link href="/blogs/3" className="widget__mini-posts">
                    <div className="mini-posts__img">
                      <Image src="/images/rcnt-img1-1.jpg" alt="rcnt" width={140} height={140} />
                    </div>
                    <div className="mini-posts__info">
                      <h4>Analyse Logs</h4>
                      <span>Optimization</span>
                    </div>
                  </Link>
                  <Link href="/blogs/3" className="widget__mini-posts">
                    <div className="mini-posts__img">
                      <Image src="/images/rcnt-img1-1.jpg" alt="rcnt" width={140} height={140} />
                    </div>
                    <div className="mini-posts__info">
                      <h4>Analyse Logs</h4>
                      <span>Optimization</span>
                    </div>
                  </Link>
                </div>
                <div className="aside_bg-text">
                  <div className="aside_bg-text_wrap">
                    <h4>SEO Intrinsic</h4>
                    <p>Pretium viverra suspendisse potenti nullam.</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}