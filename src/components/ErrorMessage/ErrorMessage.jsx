import "./ErrorMessage.scss";
import errorImg from "../../assets/images/error-403.gif";
import React from "react";

export default function ErrorMessage() {
  return (
    <div className="content-error-wrapper">
      <h1 className="error-title">User with this email already exists. </h1>
      <div className="d-flex justify-content-center">
        <img src={errorImg} className="error-image" alt="error-image" />
      </div>
    </div>
  );
}
