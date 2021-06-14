import React, { useState } from "react";
import "./SignIn.scss";
import SignInIcon from "../../assets/images/SignInIcon.gif";
import SignInText from "../../assets/images/SignInText.png";
import arrowBack from "../../assets/images/arrow-back.svg";
import history from "../../helpers/history";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import passwordEye from "../../assets/images/password-eye.svg";
import axios from "axios";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignIn(props) {
  const [statePassword, handlePasswordEye] = useState(false);
  function signIn(user) {
    axios
      .post("http://localhost:3032/signin", user)
      .then((res) => {
        console.log("RESULT");
        console.log(res);
      })
      .catch((er) => {
        if (er.response.status === 403) {
          console.log(er.response);
        }
      });
  }
  return (
    <div className="container sign-up-wrapper mt-5 row p-0 mb-5 mt-5">
      <button
        className="button-arrow-back p-0"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={arrowBack} className="image-arrow-back" />
      </button>
      <div className="col-lg-6 d-flex align-items-center p-0">
        <div className="form-wrapper bg-info col-12 d-flex flex-column justify-content-center align-items-center p-0">
          <h1 className="sign-in-title mt-5">Crack IT</h1>
          <p className="sign-in-subtitle">If not now. When?</p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              signIn(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="d-flex flex-column align-items-center justify-content-center form-wrapper">
                <div className="input-wrapper-signin">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="m-3"
                  />
                </div>
                {errors.email && touched.email ? (
                  <div className="error-validation-msg d-flex justify-content-start">
                    {errors.email}
                  </div>
                ) : null}
                <div className="input-wrapper-signin">
                  <Field
                    name="password"
                    type={statePassword ? "text" : "password"}
                    placeholder="Password"
                    className="m-3"
                  />
                  <img
                    src={passwordEye}
                    className="password-eye"
                    onClick={() => handlePasswordEye(!statePassword)}
                  />
                </div>
                {errors.password && touched.password ? (
                  <div className="error-validation-msg d-flex justify-content-start">
                    {errors.password}
                  </div>
                ) : null}
                <div className="mb-5 d-flex justify-content-center flex-column align-items-center">
                  <p className="have-account-sign-up mt-5">
                    Don't have an account?
                    <a href="/signup" className="ml-2 sign-in-link">
                      Sign Up
                    </a>
                  </p>
                  <p className="have-account-sign-up">
                    Forgot your password?
                    <a href="#" className="ml-2 sign-in-link">
                      Restore
                    </a>
                  </p>
                  <button
                    className="mt-4 mb-4 sign-up-submit-button"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="col-lg-6 p-5 ml-0 d-none d-lg-flex justify-content-center flex-column">
        <img src={SignInIcon} className="img-fluid" />
        <img src={SignInText} className="img-fluid mb-2" />
      </div>
    </div>
  );
}
