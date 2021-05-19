const Survey = require('../models/surveys')

//Unique ID Generator
const { v4: uuidv4 } = require('uuid');




//POST Survey Information
const storeSurveyController = (req, res, next) => {

        let survey = new Survey({
            _id : uuidv4(),
            surveyTitle: req.body.surveyTitle,
            surveyDescription: req.body.surveyDescription,
            questionList: req.body.questionList,
            

        })
        survey.save()
            .then(surveyData => {
                res.status(201).json({
                    message: 'Information Stored Successfully',
                    survey: surveyData
                })
            })
            .catch(error => {
                res.json({
                    message: 'Error Occured at Storing Survey Information',
                    error
                })
            })
    


}


//Get All Survey List
const getAllSurvey = (req, res, next) => {
    Survey.find()
        .then(allSurvey => {
            res.json({
                message: 'All Survey List',
                Users: allSurvey
            })
        })
        .catch(error => {
            res.json({
                message: 'Error Occured getting All Survey List',
                error
            })
        })


}

module.exports = {
    storeSurveyController,
    getAllSurvey
    

}