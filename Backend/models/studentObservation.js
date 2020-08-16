const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Student = require("../models/studentObservation");
//const Class = mongoose.model("classObservation")

router.post('/student', (req,res) => {
    const { tags, notes } = req.body;
   
    const student = new Student(req.body);
    student.save((err, student) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        res.json({
            "tags": student.tags,
            "notes":student.notes
        });
    });
});
  


module.exports = router;