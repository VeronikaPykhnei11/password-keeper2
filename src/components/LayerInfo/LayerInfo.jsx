import React from "react";

export default function LayerInfo(props) {
  return (
    <div className="col-lg-7 d-flex justify-content-center flex-column">
      <p className="statistic-info-title">{props.info.title}</p>
      <p className="statistic-info-subtitle mt-3">{props.info.text}</p>
    </div>
  );
}
