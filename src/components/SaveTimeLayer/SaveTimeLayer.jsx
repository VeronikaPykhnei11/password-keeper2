import "./SaveTimeLayer.scss";
import SaveTime from "../../assets/images/SaveTime.gif";
import React from "react";
import LayerInfo from "../LayerInfo/LayerInfo";
import LayerImage from "../LayerImage/LayerImage";

export default function SaveTimeLayer() {
  return (
    <div className="container mt-5 d-flex justify-content-center statistic-wrapper mb-5">
      <div className="row mt-5">
        <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column">
          <p className="statistic-info-title d-flex justify-content-center align-items-center">
            Start saving your time
          </p>
          <div className="row buttons-wrapper-save-time">
            <button className="try-button btn btn-light try-free-button d-flex align-items-center justify-content-center col-12">
              Try For Free
            </button>
          </div>
        </div>
        <LayerImage image={SaveTime} />
      </div>
    </div>
  );
}
