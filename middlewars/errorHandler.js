const {StatusCodes} = require('http-status-codes')
const errorMessages = require('../messages/ErrorMessages')
const errorHandler = (err,req,res,next)=>{
    const customError = {
        message : err.message || errorMessages.InternalServerError   ,
        statusCode :  err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR 
    }
    
    res.status(err.statusCode).json({error:err.message})
}
module.exports = errorHandler