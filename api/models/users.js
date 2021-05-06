const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Email Validator
const validator = require('validator')

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1

    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        minlength: 1

    },
    email: {
        type: String,
        trim: true,
        unique: true,
        validator: (v) => {
            return validator.isEmail(v)
        },
        message: '{value} is not a valid Email'
    },
    password : String
})

//var userDatabase = mongoose.createConnection('mongodb://localhost/userData');
//userDatabase.model('Users', Schema(userSchema));

const userModel = mongoose.model('User', userSchema)

module.exports = userModel

//After Model Create Route and Controller