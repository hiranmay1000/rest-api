const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    roll: String,
    email: String,
})

const Stud = mongoose.model('myStuds', studentSchema);

module.exports = Stud;