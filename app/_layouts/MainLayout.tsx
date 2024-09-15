"use client"

import { Rubik } from "next/font/google";
import { LangProvider, useLang } from "../_contexts/LangContext";
import Header from "../_components/Header/header";
import Footer from "../_components/Footer/footer";

const rubik = Rubik({ subsets: ["latin"] });

const HtmlWrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { lang } = useLang();

  return (
    <html lang={lang === 'ltr' ? 'en' : 'ar'} dir={lang}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={rubik.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <LangProvider>
      <HtmlWrapper>{children}</HtmlWrapper>
    </LangProvider>
  );
}

export default MainLayout;
