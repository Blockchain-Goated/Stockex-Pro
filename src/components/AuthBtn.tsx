import { ChevronDownIcon, RefreshIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const AuthBtn = (): JSX.Element => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="auth-btn">
        <div className="auth-info">
          <RefreshIcon className="icon animate-spin" />
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="auth-btn">
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
  }

  return (
    <div className="auth-btn">
      <div className="auth-info pr-2">
        {/* @ts-ignore */}
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={24}
          height={24}
          className="rounded-full"
        />
        <p>Hi, {session?.user?.name}</p>
      </div>

      <div className="dropdown">
        <button className="dropdown-btn !py-1">
          <ChevronDownIcon className="icon" />
        </button>

        <ul className="dropdown-list opacity-0 invisible">
          <li className="dropdown-item">
            <button onClick={() => signOut()} className="cta">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthBtn;
