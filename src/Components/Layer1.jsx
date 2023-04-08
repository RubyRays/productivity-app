import React, { useState } from "react";

function Layer1(props) {
  const [list, setList] = useState({
    title: "",
    lists: []
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setList((prevlist) => {
      if (name === "title") {
        return {
          title: value,
          lists: prevlist.lists
        };
      }

      if (name === "lists") {
        return {
          title: prevlist.title,
          lists: [value]
        };
      }
    });
  }
  function submit(event) {
    props.add(list);

    event.preventDefault();
  }


  return (
    <div className="App">
      <input className="input-style topic-input" name="title" onChange={handleChange} value={list.title} placeholder="Title" />
      <input
        className="input-style topic-input"
        name="lists"
        onChange={handleChange}
        value={list.lists}
        placeholder="item"
      />

      <button className="list-button-style" onClick={submit}>Add Title</button>

    </div>
  );
}
export default Layer1;
