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
router.get('/getunit', (req,res)=>{
    Unit.findOne({schoolName:req.body.schoolName,className:req.body.className,unit:req.body.unit,teamno:req.body.teamno})
    .then(unitt => {
            if(unitt.ina === 0){
                unitt.ina = undefined
            }
            if(unitt.ia === 0){
                unitt.ia = undefined
            }if(unitt.ig === 0){
                unitt.ig = undefined
            }if(unitt.is === 0){
                unitt.is = undefined
            }if(unitt.pna === 0){
                unitt.pna = undefined
            }if(unitt.pc === 0){
                unitt.pc = undefined
            }if(unitt.ppc === 0){
                unitt.ppc = undefined
            }if(unitt.mna === 0){
                unitt.mna = undefined
            }
            if(unitt.mpc === 0){
                unitt.mpc = undefined
            }
            if(unitt.mc === 0){
                unitt.mc = undefined
            }
            if(unitt.prna === 0){
                unitt.prna = undefined
            }
            if(unitt.pra === 0){
                unitt.pra = undefined
            }
            res.json({unitt})
    
    }).catch(err=> {
        return res.status(404).json({
            error: "Not found"
        })
    })
})



module.exports = router