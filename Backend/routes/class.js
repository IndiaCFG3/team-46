const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Class = require("../models/class")
//const Class = mongoose.model("classObservation")

router.post('/class', (req,res) => {
    const { studentteacherId, classPresence, initiative,confidence, preparation, helpingTeams,notesForMentor } = req.body
    if(!studentteacherId){
        return res.status(422).json({
            error: "Please fill all student Teacher ID"
        })
    }
    const classs = new Class(req.body)
    classs.save((err, classs) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        res.json({
            "studentteacherId": classs.studentteacherId
        })
    })
});
  


module.exports = router