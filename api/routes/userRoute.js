const express  = require('express')
const router  = express.Router()


//Import user Controller
const userController = require('../controllers/userController')

//Sign In or Login In
router.post('/login/',userController.loginController)

//Signup or Register
router.post('/register/', userController.registerController)


//Get All users list
router.get('/allusers', userController.getAllUser)

module.exports = router