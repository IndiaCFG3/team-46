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
  

// Get Route

router.get('/user/:userId', requireLogin, (req,res)=>{
    User.findOne({_id:req.params.userId})
    .select("-password")
    .then(user => {
        Post.find({postedBy:req.params.userId})
        .populate("postedBy", "_id name username")
        .exec((err,posts)=>{
            if(err){
                return res.status(422).json({
                    error: err
                })
            }
            res.json({user, posts})
        })
    }).catch(err=> {
        return res.status(404).json({
            error: "User not found"
        })
    })
})


module.exports = router