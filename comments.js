// Create a web server 
// that listens for HTTP requests on port 3000. When it receives a request, it should respond with a JSON object containing all the comments in the database.

const express = require('express');
const app = express();
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});