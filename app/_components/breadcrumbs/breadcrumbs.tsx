"use client"

import Image from "next/image";
import Link from "next/link";

import "./breadcrumbs.css";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const pathItems = pathNames
    .map((path, i) => ({
      name: path,
      path: pathNames.slice(0, i + 1).join('/'),
    }));

  return (
    <section className="breadcrumbs relative">
      <Image src="/bgs/bg10.jpg" alt="breadcrumb bg" fill />
      <div className="container text-center relative">
        <div className="page-info">
          <h1>h1 Title here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
        <ul className="page-breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          {
            pathItems.map(
              (item) => (
                <li key={item.name}>
                  <Link href={"/" + item.path}>
                    {item.name}
                  </Link>
                </li>
              )
            )
          }
        </ul>
      </div>
    </section>
  )
}