const express = require("express");
const app = express();

// middleware to read JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// GET with params : --> this id is dynamic changeable
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// GET with query
app.get("/search", (req, res) => {
  res.json({
    keyword: req.query.keyword,
    page: req.query.page,
  });
});

// POST route (receive data)
app.post("/user", (req, res) => {
  res.json({
    message: "User created",
    data: req.body,
  });
});

// PUT route (update full data)
app.put("/user/:id", (req, res) => {
  res.json({
    message: "User fully updated",
    userId: req.params.id,
    updatedData: req.body,
  });
});

// PATCH route (partial update)
app.patch("/user/:id", (req, res) => {
  res.json({
    message: "User partially updated",
    userId: req.params.id,
    updatedFields: req.body,
  });
});

// DELETE route
app.delete("/user/:id", (req, res) => {
  res.json({
    message: "User deleted",
    userId: req.params.id,
  });
});

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
