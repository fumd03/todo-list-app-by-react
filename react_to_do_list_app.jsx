import React, { useState } from "react";
import "./todo.css";

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
      <div className="input-group">
        <input
          type="text"
          value={currentItem}
          onChange={handleItemChange}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button
          onClick={addItem}
          disabled={!currentItem.trim()}
          className="add-button"
        >
          Add Task{" "}
        </button>{" "}
      </div>{" "}
      <ul className="task-list">
        {" "}
        {items.map((item, index) => (
          <li key={index} className="task-item">
            {" "}
            {item}{" "}
            <button onClick={() => deleteItem(index)} className="remove-button">
              Remove{" "}
            </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
}

export default TodoApp;
