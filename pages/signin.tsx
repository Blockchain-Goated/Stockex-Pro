// pages/signin.jsx
import { signIn } from "next-auth/react";

import styles from "../styles/signin.module.css";

export default function SignIn() {
  

  return (
    <section className={styles.cont}>
      <div className={styles.inner_cont}>
        <h1>Welcome To StockEx</h1>
        <p>Please SignIn To Continue To The App</p>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    </section>
  );
}
