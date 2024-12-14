import React, { useState } from "react";

function TodoApp() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  const handleItemChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const addItem = () => {
    if (currentItem.trim() !== "") {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="TodoApp">
      <h1> My Task List </h1>{" "}
      <input
        type="text"
        value={currentItem}
        onChange={handleItemChange}
        placeholder="Enter a new task"
      />
      <button onClick={addItem}> Add Task </button>{" "}
      <ul>
        {" "}
        {items.map((item, index) => (
          <li key={index}>
            {" "}
            {item} <button onClick={() => deleteItem(index)}> Remove </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}

export default TodoApp;
