import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {load && <PreLoader />}
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Analytics />
      </SessionProvider>
      <ToastContainer />
    </Fragment>
  );
}

export default MyApp;
