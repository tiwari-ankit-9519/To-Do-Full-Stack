import React, { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:4000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
};

export default App;
