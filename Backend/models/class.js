const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var classSchema = new Schema({
    studentteacherId: {
        type: String,
        maxlength: 16
    },
    classPresence: {
        type: Number
    },
    initiative: {
        type: Number
    },
    confidence: {
        type: Number
    },
    preparation: {
        type: Number
    },
    helpingTeams: {
        type: Number
    },
    notesForMentor: {
        type: String
    }

},{timestamps:true});

module.exports = mongoose.model("Class",classSchema);