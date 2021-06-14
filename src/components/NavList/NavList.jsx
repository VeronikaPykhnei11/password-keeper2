import React from "react";

export default function NavList(props) {
  const listItems = props.navItems.map((el) => (
    <li className="nav-item mr-4">
      <a className="nav-link p-0" href="#">
        {el}
      </a>
    </li>
  ));
  return <ul className="navbar-nav mr-auto">{listItems}</ul>;
}
