const User = require('../models/users')

//Import bcrypt for password hash
const bcrypt = require('bcryptjs')


//POST user information to database on Register
const registerController = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash

        })
        user.save()
            .then(userData =>{
                res.status(201).json({
                    message:'User Created Successfully',
                    user: userData
                })
            })
            .catch(error=>{
                res.json({
                    message:'Error Occured',
                    error
                })
            })
    })


}

//Login Controller
const loginController = (req,res,next) =>{
    let email = req.body.email
    
    let password = req.body.password
   

    //Chcek whether user is in database
    User.findOne({email})
        .then(userEmail =>{

            let name  = userEmail.lastName

            if(userEmail){
                bcrypt.compare(password,userEmail.password,(err,result)=>{
                    if(err){
                        res.json({
                            message:'Error Occured'
                        })
                    } 
                    else if(result){
                        res.json({
                            message:'Login Successful for user: '+name
                        })
                    } else {
                        res.json({
                            message:'Login Failed.Pasword Mismatch'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'User not found'
                })
            }
        })
        .catch(error =>{
            res.json({
                message:"Mismatch",
                error
            })
        })


}


//Get All User List
const getAllUser = (req,res,next) =>{
    User.find()
        .then(allUser =>{
            res.json({
                message:'All Users',
                Users: allUser
            })
        })
        .catch(error =>{
            res.json({
                message:'Error Occured',
                error
            })
        })


}

module.exports = {
    registerController,
    getAllUser,
    loginController

}