const express = require('express')
const router = express.Router()


//Import Client Controller
const clientController = require('../controllers/clientController')

//Sign In or Login In
router.post('/login/', clientController.loginController)

//Signup or Register
router.post('/register/',clientController.registerController)


//Get All users list
router.get('/allclients',clientController.getAllUser)

module.exports = router