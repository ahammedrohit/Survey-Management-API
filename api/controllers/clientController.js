const Client = require('../models/clients')

//Import bcrypt for password hash
const bcrypt = require('bcryptjs')

//POST Client information on database on Register
const registerController = (req,res,next)=>{

    let password = req.body.password
    //SaltRounds=no of encryption
    let saltRounds = 10

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err){
            res.json({
                err
            })
        }

        let client = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        })
        client.save()
            .then(clientData =>{
                res.status(201).json({
                    message:'Client Created Successfully',
                    Client:clientData
                })
            })
            .catch(error=>{
                res.json({
                    message:'Error Occurred at Saving information to documents'
                })
            })

    })
}

//Login Controller for Clients
const loginController = (req,res,next) =>{
    let email = req.body.email
    let password = req.body.password

    Client.findOne({email})
        .then(clientEmail =>{
            let name = clientEmail.lastName

            if(clientEmail){
                bcrypt.compare(password,clientEmail.password,(err,result)=>{
                    if(err){
                        res.json({
                            message:'Error Occured at finding user email'
                        })
                    }
                    else if(result){
                        res.json({
                            message:'Login Successful for Client: '+name
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
    Client.find()
        .then(allUser =>{
            res.json({
                message:'All Clients',
                Users: allUser
            })
        })
        .catch(error =>{
            res.json({
                message:'Error Occurred',
                error
            })
        })


}

module.exports = {
    registerController,
    getAllUser,
    loginController

}