import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Lock: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.replace("/signin");
  }

  const [formData, setFormData] = useState({
    otp: "",
  });
  const [error, setError] = useState(false);
  const { otp } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (otp) {
      router.push("/dashboard");
    }
  };
  return (
    <LandingLayout>
      <div id="main-wrapper" className="show">
        <div className="authincation section-padding">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-xl-4 col-md-5">
                <div className="mini-logo text-center my-3">
                  <Link href="index"><img src="./images/logo.png" alt=""></Link>
                  <h4 className="card-title mt-5">Locked</h4>
                </div>
                <div className="auth-form card">
                  <div className="card-body">
                    <form action="index" className="row g-3">
                      <div className="col-12">
                        <label className="form-label">Enter Password</label>

                        <input type="password" className="form-control" placeholder="***********">
                      </div>
                      <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Lock;
