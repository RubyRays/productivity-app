import React, { useState } from "react";
import './App.css';
import Layer1 from "./Components/Layer1";
import Layer2 from "./Components/Layer2";

function App() {
  //collection state that holds the different todolists
  const [collection, setCollection] = useState([]);
  function addColl(list) {
    console.log(list);
    setCollection((prevCollection) => {
      return [...prevCollection, list];
    });
  }

  function update(id, a) {
    var count = 0;
    const newVal = a;
    setCollection((prevCollection) => {
      return prevCollection.filter((item, index) => {
        if (id === index && count < 1) {
          count += 1;
          console.log(id + "" + index);
          item.lists = [...item.lists, newVal];
        }
        console.log(item.lists);
        return item.lists;
      });
    });
  }
  function deleteEntry(id) {
    setCollection((prevCollection) => {
      return prevCollection.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function omitItem(id, listId) {
    var count = 0;
    setCollection((prevCollection) => {
      return prevCollection.filter((item, index) => {
        if (listId === index && count < 1) {
          console.log(item.lists[id]);

          item.lists[id] = "---";
          count += 1;
        }
        return item.lists;
      });
    });
  }
  function changeTitle(id, a) {
    setCollection((prevCollection) => {
      return prevCollection.filter((item, index) => {
        if(id===index){
          item.title = a;
        }
        
        return item.title;
      });
    });
  }


  return (
    <div className="App">
      <div className="red">
        <Layer1 add={addColl} />

        <div className="Note">
          {collection.map((cn, index) => {
            return (
              <Layer2
                key={index}
                id={index}
                title={cn.title}
                lists={cn.lists}
                onDelete={deleteEntry}
                onUpdate={update}
                del={omitItem}
                change={changeTitle}
                // deleteThat={omitItem}
              />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default App;