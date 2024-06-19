
import { BlogItem } from "../_components/blog-item/blog-item";
import { Breadcrumbs } from "../_components/breadcrumbs/breadcrumbs";
import "./blogs.css";

export default function Page() {
  return (
    <>
      <Breadcrumbs type="landing" />
      <section className="blogs-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-9">
              {
                Array.from({ length: 5 }, (v, i) =>
                  <BlogItem key={i} />
                )
              }
            </div>
            <div className="col-md-12 col-sm-12 col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}