const ErrorApi = require('./error')
const {StatusCodes} = require('http-status-codes')
class BadRequestError extends ErrorApi {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
module.exports = BadRequestError