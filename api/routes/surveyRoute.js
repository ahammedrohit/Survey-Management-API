const express = require('express')
const router = express.Router()


//Import survey Controller
const surveyController = require('../controllers/surveyController')

//Post Survey
router.post('/postsurvey/', surveyController.storeSurveyController)



//Get All users list
router.get('/allsurveys', surveyController.getAllSurvey )

module.exports = router