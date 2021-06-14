import React from "react";

export default function FooterIcon(props) {
  const IconList = props.icons.map((el) => (
    <img src={el} className="img-fluid icon" />
  ));
  return (
    <div className="row mt-4 d-flex justify-content-center">{IconList}</div>
  );
}
