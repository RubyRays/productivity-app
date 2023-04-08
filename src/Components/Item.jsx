import React from "react";

function Item(props) {
  return (
    <div
      className="list-item-style"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Item;