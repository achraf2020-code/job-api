const ErrorApi = require('./error')
const {StatusCodes} = require('http-status-codes')
class NotFoundError extends ErrorApi {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}
module.exports = NotFoundError