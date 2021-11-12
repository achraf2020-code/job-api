const {BadRequestError,AuthError} = require('../CustomErrors')
const errorMessages = require('../messages/ErrorMessages')
require('express-async-errors')
module.exports = {
    login:async(req,res)=>{
        throw new BadRequestError(errorMessages.BadRequest)
        res.send('im login route')
    },
    register:async(req,res)=>{
        res.send('im register route')
    }
}