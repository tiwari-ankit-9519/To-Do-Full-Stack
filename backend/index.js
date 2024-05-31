const express = require("express");
const { createTodo, updateTodo } = require("./types");
const connectDB = require("./db");
const Todo = require("./Todo");
const app = express();
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const data = createTodo.safeParse(req.body);
  if (!data.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  const { title, description } = data.data;
  const todo = await Todo.create({
    title,
    description,
    completed: false,
  });

  res.status(201).json({
    msg: "Todo created successfully",
    todo,
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  if (!todos) {
    return res.status(404).json({
      msg: "No todos found",
    });
  }

  res.json({
    msg: "Todos fetched successfully",
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const data = updateTodo.safeParse(req.body);
  if (!data.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  await Todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo Updated",
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
