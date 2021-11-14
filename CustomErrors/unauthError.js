const ErrorApi = require('./error')
const {StatusCodes} = require('http-status-codes')
class AuthError extends ErrorApi {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports = AuthError