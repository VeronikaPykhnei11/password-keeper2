import React from "react";

export default function UserButtons(props) {
  const buttons = props.buttonsInfo.map((el) => {
    return (
      <button className={el.class} onClick={el.action}>
        {el.title}
      </button>
    );
  });
  return <>{buttons}</>;
}
