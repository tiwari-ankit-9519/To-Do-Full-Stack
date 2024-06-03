import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function postTodos() {
    try {
      const response = await fetch("http://localhost:4000/todo", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (response.ok) {
        setMessage("Todo created successfully!");
      } else {
        setMessage(`Error: ${json.msg || "Something went wrong"}`);
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    }
  }

  function onTitleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function onDescriptionChangeHandler(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <input type="text" placeholder="Title" onChange={onTitleChangeHandler} />
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={onDescriptionChangeHandler}
      />
      <br />
      <button onClick={postTodos}>Add Todo</button>
      <p>{message}</p>
    </>
  );
};

export default CreateTodo;
