const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hiranmay1000:LJlXSmJ9TVVS2kmK@restdb.4cgfksq.mongodb.net/usiversityData')

mongoose.connection.on('error', err => {
    console.log('Failed connetion to database due to ', err);
})

mongoose.connection.on('connected', connected => {
    console.log('Database connected successfully!');
})

module.exports = mongoose;