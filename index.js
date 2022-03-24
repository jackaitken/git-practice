const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const url = `http://localhost`;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

// Add new list
app.post('/newlist', (req, res) => {
  // STUB
});

// Add new todo
app.post('/newtodo', (req, res) => {
  // STUB
});

// Get todo
app.get('/todo/:id', (req, res) => {
  // STUB
});

// Get todo list
app.post('/todolist/:id', (req, res) => {
  // STUB
});

// Update a todo item
app.post('/todo:id', (req, res) => {
  // STUB
});

// Delete a list
app.post('/deletelist/:id', (req, res) => {
  // STUB
});

// Delete a todo item
app.post('/deletetodo/:id', (req, res) => {
  // STUB
});

app.listen(PORT, () => console.log(`Currently being served at ${url}:${PORT}`));