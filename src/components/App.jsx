import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="newItem"
          value={newItem}
          onChange={handleChange}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
