const Users = require('../models/users')
const {BadRequestError,AuthError} = require('../CustomErrors')
const {StatusCodes} = require('http-status-codes')
const errorMessages = require('../messages/ErrorMessages')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('express-async-errors')
module.exports = {
    login:async(req,res)=>{
        

    },
    register:async(req,res)=>{
      const {name,password,email} = req.body
    //   if(!name || !password || !email){
    //     throw new BadRequestError(errorMessages.BadRequest)
    //   }
    const salt = await   bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

      const userTemp = {
          name:name,
          password:hashedPassword,
          email:email
      }
      const user = await Users.create(userTemp)
      const token = jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFE_TIME })
      res.status(StatusCodes.OK).json({user:{name:user.name,token}})
      
    }
}