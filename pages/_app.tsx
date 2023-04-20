import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider, signIn } from "next-auth/react";

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
        {!session && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <div style={{ backgroundColor: "white", padding: "32px" }}>
              <h2>Please login to use the app</h2>
              <button onClick={() => signIn()}>Login</button>
            </div>
          </div>
        )}
        <Component {...pageProps} />
      </SessionProvider>
      <ToastContainer />
    </Fragment>
  );
}

export default MyApp;
