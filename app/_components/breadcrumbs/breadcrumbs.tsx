"use client"

import Image from "next/image";
import Link from "next/link";

import "./breadcrumbs.css";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { useLang } from "@/app/_contexts/LangContext";

interface Props {
  type: "landing" | "sub",
  titleEn: string,
  descEn: string,
  titleAr: string,
  descAr: string,
}

export const Breadcrumbs: FunctionComponent<Props> = ({ type, titleEn, descEn, titleAr, descAr }) => {
  const { lang } = useLang();
  const title = lang === 'ltr' ? titleEn : titleAr;
  const desc = lang === 'ltr' ? descEn : descAr

  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: i === pathNames.length - 1 ? title : path,
    path: pathNames.slice(0, i + 1).join('/'),
  }));

  return (
    <section className={"breadcrumbs relative " + type}>
      <div className="container">
        <Image src="/bgs/bg10.jpg" alt="breadcrumb bg" fill />
        <div className="container text-center relative">
          <div className="page-info">
            <h1>{title}</h1>
            <p>{desc}</p>
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
      </div>
    </section>
  )
}