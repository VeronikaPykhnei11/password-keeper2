import "./Logo.scss";
import logo from "../../assets/images/logo.png";
import React from "react";

export default function Logo() {
  return (
    <div className="col-3 p-0">
      <a href="#">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </div>
  );
}
