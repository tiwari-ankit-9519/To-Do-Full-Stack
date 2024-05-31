const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>
              {todo.completed === true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
