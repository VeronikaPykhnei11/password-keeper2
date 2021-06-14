import "./Header.scss";
import close from "../../assets/images/close.svg";
import logo from "../../assets/images/logo.png";
import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import NavList from "../NavList/NavList";
import history from "../../helpers/history";
import UserButtons from "./UserButtons";
import store from "../../store/store";

export default function Header() {
  const [click, handleClick] = useState(true);
  const [scroll, setScroll] = useState(false);
  const navItems = [
    "Features",
    "Personal",
    "For Business",
    "Support",
    "Download",
  ];
  const navButtonsInfo = [
    {
      class: "btn btn-light sign-up-button",
      action: () => {
        history.push("signup");
      },
      title: "Sign Up",
    },
    {
      class: "btn btn-outline-light sign-in-button ml-2",
      action: () => {
        history.push("signin");
      },
      title: "Sign In",
    },
  ];
  const checkIfLogged = store.getState().appUser.isLogged;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 50);
    });
  }, []);
  return (
    <div className="row nav-wrapper sticky-top p-2">
      <nav
        className={
          (scroll ? "scroll-nav " : "") +
          "navbar navbar-expand-xl navbar-dark d-flex justify-content-between mt-3"
        }
      >
        <Logo />
        <button
          className="navbar-toggler toggle-button p-0 custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          onClick={() => {
            console.log(checkIfLogged);
            handleClick(!click);
          }}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse d-none d-xl-flex">
          <NavList navItems={navItems} />
          <div className="col-3 d-flex justify-content-end align-content-center">
            <UserButtons buttonsInfo={navButtonsInfo} />
          </div>
        </div>
      </nav>
      <div className={click ? "d-none" : "sidebar"}>
        <div className="container-fluid bg-white sidebar-wrapper px-0">
          <div className="row d-flex justify-content-between mt-2 first-row">
            <div className="col-4 d-flex align-items-center ml-4">
              <a href="/">
                <img src={logo} className="logo" alt="logo" />
              </a>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <button
                onClick={() => {
                  handleClick(!click);
                }}
                className="close-button"
              >
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between mx-2 content-wrapper">
            <div className="col-6 mt-5">
              <NavList navItems={navItems} />
            </div>
            <div className="row buttons-wrapper mb-1">
              <div className="col-sm-6 px-3 mt-2">
                <button
                  className="sidebar-sign-in"
                  onClick={() => {
                    history.push("signin");
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="col-sm-6 px-3 mt-2">
                <button
                  className="sidebar-sign-up"
                  onClick={() => {
                    history.push("signup");
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
