import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", isdone: false, id: uuidv4() },
  ]);
  let [newtodo, setNewtodo] = useState("");

  let addtask = () => {
    setTodos((prevtodos) => {
      return [...prevtodos, { task: newtodo, isdone: false, id: uuidv4() }];
    });
    setNewtodo("");
  };

  let updateTodoval = (event) => {
    setNewtodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((prevTodos) => prevTodos.id !== id));
  };

  const Markallasdone = () => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          isdone: true,
        };
      })
    );
  };

  let Markasdone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isdone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="container">
      <input
        placeholder="Add task"
        value={newtodo}
        onChange={updateTodoval}
      ></input>
      <br />
      <button onClick={addtask} className="add-task"> Add Task</button>
      <hr />
      <h2>Task Todo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.isdone ? "line-through" : ""}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          
            <button
              className="mark-done-btn"
              onClick={() => Markasdone(todo.id)}
            >
              Mark As Done
            </button>
          
          </li>
        ))}
      </ul>
      <br />
      <button className="mark-all-btn" onClick={Markallasdone}>
        Mark All As Done
      </button>
    </div>
  );
}
