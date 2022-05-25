const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/home', (req, res) => {
  res.send('This is the home page');
});

app.get('/menu' (req, res) => {
  res.send('This is the menu');
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
}); 