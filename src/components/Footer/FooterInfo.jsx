import React from "react";

export default function FooterInfo(props) {
  const ListItems = (header) => {
    for (let i = 0; i < props.footerInfo.length; i += 1) {
      if (props.footerInfo[i].header === header) {
        const List = props.footerInfo[i].items.map((item) => <li>{item}</li>);
        return List;
      }
    }
  };
  const List = props.footerInfo.map((el) => (
    <div className="col-lg-2 mt-5 d-flex justify-content-center">
      <div className=" d-flex flex-column align-items-start">
        <h4>{el.header}</h4>
        <ul>{ListItems(el.header)}</ul>
      </div>
    </div>
  ));
  return <>{List}</>;
}
