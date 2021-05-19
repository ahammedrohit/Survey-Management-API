const mongoose = require('mongoose')
const Schema = mongoose.Schema


const surveySchema = new Schema({
    _id: String,
    surveyTitle: {
        type: String,
        trim: true,
        required: true,
        minlength: 3

    },
    surveyDescription: {
        type: String,
        trim: true,
        required: true,
        minlength: 1

    },
    questionList: {
        type: Object,
        trim: true,
        required: true
    }

})

//var userDatabase = mongoose.createConnection('mongodb://localhost/userData');
//userDatabase.model('Users', Schema(userSchema));

const surveyModel = mongoose.model('Survey', surveySchema)

module.exports = surveyModel

//After Model Create Route and Controller