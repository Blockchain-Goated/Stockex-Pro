// pages/signin.jsx
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import styles from "../styles/signin.module.css";

export default function SignIn() {
  const { data: session, status } = useSession();
  console.log(`Session is ${JSON.stringify(session)}`);
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <section className={styles.cont}>
      <div className={styles.inner_cont}>
        <h1>Welcome To StockEx</h1>
        <p>Please SignIn To Continue To The App</p>
        <button onClick={handleSignIn}>Sign in with Google</button>
      </div>
    </section>
  );
}
