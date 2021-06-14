import React, { useState } from "react";
import "./SignUp.scss";
import SignUpIcon from "../../assets/images/SignUp.gif";
import SignUpText from "../../assets/images/SignUpText.png";
import arrowBack from "../../assets/images/arrow-back.svg";
import history from "../../helpers/history";
import passwordEye from "../../assets/images/password-eye.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function SignUp(props) {
  const [errorEmail, handleErrorEmail] = useState(false);
  const [errorUsername, handleErrorUsername] = useState(false);
  const [statePassword, handlePasswordEye] = useState(false);
  const [stateConfirm, handleConfirmEye] = useState(false);
  const emailExists = "User with this email already exists.";
  const usernameExists = "User with this username already exists.";
  function signUp(user) {
    axios
      .post("http://localhost:3032/signup", user)
      .then((res) => {
        console.log("RESULT");
        console.log(res);
      })
      .catch((er) => {
        if (er.response.status === 403) {
          console.log(er.response);
          if (er.response.data[0] === "E") {
            handleErrorEmail(!errorEmail);
          } else {
            handleErrorUsername(!errorUsername);
          }
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
      <div className="col-lg-6 p-0 ml-0 d-none d-lg-block">
        <img src={SignUpIcon} className="img-fluid" />
        <img src={SignUpText} className="img-fluid mb-2" />
      </div>
      <div className="col-lg-6 d-flex align-items-center p-0">
        <div className="form-wrapper bg-info col-12 d-flex flex-column justify-content-center align-items-center p-0">
          <h1 className="sign-up-title mt-0">Crack IT</h1>
          <p className="sign-up-subtitle">If not now. When?</p>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              signUp(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="d-flex flex-column align-items-center form-wrapper m-0">
                <div className="input-wrapper-signup ">
                  <Field
                    name="username"
                    placeholder="Username"
                    className="m-3"
                  />
                </div>
                {(errors.username && touched.username) || errorUsername ? (
                  <div className="error-validation-msg">
                    {errors.username || usernameExists}
                  </div>
                ) : null}
                <div className="input-wrapper-signup">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="m-3"
                  />
                </div>
                {(errors.email && touched.email) || errorEmail ? (
                  <div className="error-validation-msg d-flex justify-content-start">
                    {errors.email || emailExists}
                  </div>
                ) : null}
                <div className="input-wrapper-signup">
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
                <div className="input-wrapper-signup">
                  <Field
                    name="confirmPassword"
                    type={stateConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    className="m-3"
                  />
                  <img
                    src={passwordEye}
                    className="password-eye"
                    onClick={() => handleConfirmEye(!stateConfirm)}
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="error-validation-msg d-flex justify-content-start">
                    {errors.confirmPassword}
                  </div>
                ) : null}
                <div className="mb-5 d-flex justify-content-center flex-column align-items-center">
                  <p className="have-account-sign-up mt-5">
                    Already have an account?
                    <a href="/signin" className="ml-2 sign-in-link">
                      Sign In
                    </a>
                  </p>
                  <button
                    className="mt-2 mb-0 sign-up-submit-button"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
