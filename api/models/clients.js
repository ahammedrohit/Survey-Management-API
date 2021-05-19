const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Email Validator
const validator = require('validator')

const clientSchema = new Schema({
    _id: String,
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
    password: String
})

const clientModel = mongoose.model('Client', clientSchema)

module.exports = clientModel