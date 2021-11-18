import "../styles/globals.css";
import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
import { hydrate } from "react-dom";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"), {
  ssr: false,
});
function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  useEffect(() => {
    if (process.browser) {
      document.getElementById("__next");
    }
  });
  if (typeof window !== "undefined") {
    return hydrate(
      <>
        <NextSeo
          title="Next Template"
          description="a Template with NextJS, Tailwind, TypeScript, SEO"
        />
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Navigation />
          <Component {...pageProps} />
        </ThemeProvider>
      </>,
      document.getElementById("__next") as Element
    );
  }
}
export default MyApp;
