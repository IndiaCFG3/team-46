const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Unit = require("../models/unit")

router.post('/unit', (req,res) => {
    const { schoolName, className, unit,teamNo, ina,ia,ig,is,pna,ppc,pc,mna,mpc,mc,prna,pr,noOfStudents,comment } = req.body
    const unit = new Unit(req.body)
    classs.save((err, classs) => {
        if(err){
            return res.status(400).json({
                message: "NOT able to save class in the Database",
                error: err
            })
        }
        res.json({
            "message": "Done Successfully"
        })
    })
});
  


module.exports = router