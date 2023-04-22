import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const useRequireAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(`session: ${JSON.stringify(session)}`);

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (status === "loading" || !session?.user) {
      router.replace("/signin");
    } else {
      router.replace("/");
    }
  }, [status, router, session]);

  return session;
};

export default useRequireAuth;
