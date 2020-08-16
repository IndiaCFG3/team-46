const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Unit = require("../models/unit")

router.post('/unit', (req,res) => {
    const { schoolName, className, unit,teamNo, ina,ia,ig,is,pna,ppc,pc,mna,mpc,mc,prna,pr,noOfStudents,comment } = req.body
    const unitt = new Unit(req.body)
    unitt.save((err, classs) => {
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
  

// Get Route
// Get Route
router.get('/getunit', (req,res)=>{
    Unit.findOne({schoolName:req.body.schoolName,className:req.body.className,unit:req.body.unit,teamno:req.body.teamno})
    .then(unitt => {
            res.json({unitt})
    
    }).catch(err=> {
        return res.status(404).json({
            error: "Not found"
        })
    })
})



module.exports = router