import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "next-themes";
import ToggleTheme from "../components/ToggleTheme";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    const container = document.getElementById("__next");
    ReactDOM.hydrate(<Component />, container);
  }
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <ToggleTheme />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
