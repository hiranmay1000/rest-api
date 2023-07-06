const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./database/mydatabase');

const studRoute = require('./api/routes/students');
const facultyRoute = require('./api/routes/faculty');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/students', studRoute);
app.use('/faculty', facultyRoute);

app.use((req, res, next) => {
    res.status(404).json({
        err: "Bad request - url not found",
    })
})

module.exports = app;