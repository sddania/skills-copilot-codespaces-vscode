
// Create web server

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});