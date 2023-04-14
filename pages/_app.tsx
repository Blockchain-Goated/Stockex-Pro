import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import { useAuthStore } from "../libs/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  const authStore = useAuthStore();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {load && <PreLoader />}
      <Component {...pageProps} />
      <ToastContainer />
    </Fragment>
  );
}

export default MyApp;
