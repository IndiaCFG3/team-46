const mongoose = require('mongoose');
const {objectId} = mongoose.Schema;

var studentObsSchema = new Schema({
    photo: {
            data: Buffer,
            contentType: String
         },
    tag: {
        type: String
    },
    comment: {
        type: String,
        maxlength: 2000
    }

   
});

module.exports = mongoose.model("StudentObs",studentObsSchema);