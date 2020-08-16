const mongoose = require('mongoose');
const crypto = require('crypto');
const {v1: uuidv1} = require('uuid');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true,
        trim: true
    },
    encryptedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    info: {
        type: Array,
        default: []
    }

},  {timestamps: true}

);

userSchema.virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv1();
        this.encryptedPassword = this.securePassword(password);
    })
    .get(function(){
        return this._password;
    })


userSchema.methods = {

    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encryptedPassword
    },

    securePassword: function(plainpassword){
        if(!plainpassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
        }
        catch(err){
            return "";
        }
    }
}

module.exports = mongoose.model("User" , userSchema);