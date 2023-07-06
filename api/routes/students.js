const express = require('express');
const router = express.Router();
const Stud = require('../models/model.student');

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: "Student get req",
    })
})

router.post('/', async (req, res, next) => {
    try {
        const { name, gender, age, roll, email } = req.body;

        const stud = new Stud({ name, gender, age, roll, email });

        const saveData = await stud.save();

        if (saveData) {
            res.status(201).json({
                success: true,
                msg: "Data successfully inserted",
            })
        } else {
            res.status(400).json({
                success: false,
                msg: "Failed to insert data",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "An error occured while inserting data",
            error: error.message,
        })
    }
})

module.exports = router;