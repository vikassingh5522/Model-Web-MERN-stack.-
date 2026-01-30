const express = require('express');
const Note = require('./models/nodes.model');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/notes', async (req, res) => {
     const { title, description } = req.body;
    const note = await Note.create({ title, description });
    res.status(201).json({
        message: 'Note created successfully',
        data: note
    }) ;
});


module.exports = app;
