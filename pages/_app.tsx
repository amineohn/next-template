import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
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
  return (
    <>
      <NextSeo
        title="Next Template"
        description="Template with NextJS, Tailwind, TypeScript"
      />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
