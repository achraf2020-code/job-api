const {StatusCodes} = require('http-status-codes')
const errorMessages = require('../messages/ErrorMessages')
const ErrorApi = require('../CustomErrors/error')
const errorHandler = (err,req,res,next)=>{
    const customError = {
        message : err.message ||  "Something went wrong try again later!"  ,
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }
    if(err.name === "CastError"){
        customError.message = `No Job found!`
        customError.statusCode = StatusCodes.NOT_FOUND
    }
    if(err.code && err.code ===11000){
        customError.message = `${Object.keys(err.keyValue)} alerdy exist!`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if(err.name ==='ValidationError'){
        customError.message = Object.values(err.errors)
                                .map((item)=>item.message)
                                .join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    
    
    res.status(customError.statusCode).json({error:customError.message})
}
module.exports = errorHandler