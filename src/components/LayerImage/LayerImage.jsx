import React from "react";

export default function LayerImage(props) {
  return (
    <div className="col-lg-5 thumbnail d-flex justify-content-center">
      <img src={props.image} className="img-fluid " />
    </div>
  );
}
