import React, { useState } from "react";
import Item from "./Item";

function Layer2(props) {
  const [newVal, setNewVal] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setNewVal(newValue);
  }

  function deleteIt(id) {
    props.del(id, props.id);
  }

  return (
    <div className="layer2">
      <h1 className="title">{props.title}</h1>
      <p>
        <input className="input-style" onChange={handleChange}></input>
        <button
          className="list-button-style"
          onClick={() => {
            props.onUpdate(props.id, newVal);
          }}
        >
          Update List
        </button>
        <button
          className="list-button-style"
          onClick={() => {
            props.change(props.id, newVal);
          }}
        >
          Update Title
        </button>
        <button
          className="list-button-style"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          Delete Entry
        </button>
      </p>
      <ul>
        {props.lists.map((listItem, index) => {
          return <Item key={index} id={index} text={listItem} onChecked={deleteIt} />;
        })}
      </ul>
    </div>
  );
}

export default Layer2;
