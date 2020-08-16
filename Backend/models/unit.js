const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

var unitEvaluationSchema = new mongoose.Schema({
   schoolName: {
       type:String,
       required: true
   },
   className: {
        type: String,
        required: true
   },
   unit: {
       type: String,
   },
   teamNo: {
       type: Number
   },
   ina: {
    type: Number,
    default: 0
   },
   ia: {
    type: Number,
    default: 0
   },
   ig: {
    type: Number,
    default: 0
   },
   is: {
       type: Number,
       default: 0
   },
   pna: {
    type: Number,
    default: 0
   },
   ppc: {
    type: Number,
    default: 0
   },
   pc: {
    type: Number,
    default: 0
   },
   mna: {
       type: Number,
       default: 0
   },
   mpc: {
    type: Number,
    default: 0
   },
   mc: {
    type: Number,
    default: 0
   },
   prna: {
    type: Number,
    default: 0
   },
   pra: {
       type: Number,
       default: 0
   },
   noOfStudents: {
    type: Number,
    default: 0
   },
   comment: {
       type: String
   },
   st1: {
    type: ObjectId,
    ref: "Class"
   },
   st2: {
    type: ObjectId,
    ref: "Class"
   },
   photo: {
       type: String
   }
   
},{timestamps:true});

module.exports = mongoose.model("Unit",unitEvaluationSchema);