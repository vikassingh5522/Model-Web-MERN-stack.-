const mogoose = require('mongoose');

const notesSchema = new mogoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mogoose.model('Note', notesSchema);