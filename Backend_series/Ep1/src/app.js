const express = require('express');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get('/', (req, res) => {
  res.send('Home Page');
});

module.exports = app;
