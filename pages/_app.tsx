import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactDOM from "react-dom";
function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    const container = document.getElementById("__next");
    ReactDOM.hydrate(<Component />, container);
  }
  return <Component {...pageProps} />;
}
export default MyApp;
