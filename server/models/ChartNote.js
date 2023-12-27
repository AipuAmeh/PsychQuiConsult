const { Schema, model } = require('mongoose');

const chartNoteSchema = new Schema({
    patient: {
        type: String,
        required: true,
        trim: true
    },
    noteText: {
        type: String,
        minlength: 1,
        maxlength: 300,
        trim: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
        // date formatting 
    },

});

const ChartNote = model('ChartNote', chartNoteSchema);

module.exports = ChartNote;