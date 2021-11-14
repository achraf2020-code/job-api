const jwt = require('jsonwebtoken')
const {BadRequestError,AuthError} = require('../CustomErrors')
const ErrorMessages = require('../messages/ErrorMessages')
const checkAuth = async(req,res,next)=>{
    const authHeader = req.headers.authorization 
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new AuthError(ErrorMessages.UnAuthorized)
    }
    const token = authHeader.split(' ')[1]
    try {
        const decode = await jwt.decode(token,process.env.JWT_SECRET)
        const {id,name} = decode
        req.user = {id:id,name:name}
        next()
    }catch(error){
        throw new AuthError(ErrorMessages.UnAuthorized)
    }
}
module.exports = checkAuth