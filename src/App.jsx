import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <>
    <sgds-masthead role="masthead"></sgds-masthead>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.completed}</p>
        </div>
      ))}
    </>
  );
}

export default App;
