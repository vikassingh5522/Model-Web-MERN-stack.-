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

// Get all notes
app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.status(200).json({
        message: 'Notes fetched successfully',
        data: notes
    });
});

app.post('/notes', async (req, res) => {
    try {
        const { title, description } = req.body || {};

        if (!title || !description) {
            return res.status(400).json({
                message: 'Title and description are required'
            });
        }

        const note = await Note.create({ title, description });
        res.status(201).json({
            message: 'Note created successfully',
            data: note
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating note',
            error: error.message
        });
    }
});


module.exports = app;
