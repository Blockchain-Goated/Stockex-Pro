import { NextPage } from "next";
import Link from "next/dist/client/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Signup: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const { name, email, password } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setError(true);
    if (name && email && password) {
      await axios({
        method: "POST",
        url: "/api/auth/register",
        headers: { "Content-Type": "application/json" },
        data: { email, password, name },
      })
        .then((response) => {
          return router.push("/index");
        })
        .catch((error) => {
          console.log(`Error in registration: ${error}`);
        });
    }
  };
  return (
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center my-4">
              <Link legacyBehavior href="/">
                <a>
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>
              <h4 className="card-title mt-5">Create your account</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form
                  name="myform"
                  className="signin_validate row g-3"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="col-12">
                    <input
                      type="text"
                      className={`form-control ${
                        error && !name ? "is-invalid" : ""
                      }`}
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className={`form-control ${
                        error && !email ? "is-invalid" : ""
                      }`}
                      placeholder="hello@example.com"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className={`form-control ${
                        error && !password ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        I certify that I am 18 years of age or older, and agree
                        to the
                        <Link legacyBehavior href="/helpdesk">
                          <a className="text-primary"> User Agreement</a>
                        </Link>{" "}
                        and{" "}
                        <Link legacyBehavior href="/privacy-policy">
                          <a className="text-primary">Privacy Policy</a>
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Create account
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <p className="mt-3 mb-0">
                    <Link legacyBehavior href="/signin">
                      <a className="text-primary"> Sign in</a>
                    </Link>{" "}
                    to your account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
