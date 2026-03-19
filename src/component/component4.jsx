import React, { useState } from "react";
import "./style.css";

function Component4() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const tasks = () => {
    if (task.trim() === "") return;
    setTodo([...todo, task]);
    setTask("");
  };

  const deleteindex = (i) => {
    const updatedtodos = todo.filter((_, index) => index !== i);

    setTodo(updatedtodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1>TODO-LIST</h1>
        <div className="input-group">
          <input
            name="todo"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={tasks}>ADD</button>
        </div>

        <h3>TASK</h3>

        <div className="todo-list">
          {todo.map((todos, index) => (
            <div key={index} className="todo-item">
              <span>{todos}</span>
              <button className="delete-btn" onClick={() => deleteindex(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component4;
