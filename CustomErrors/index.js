const ErrorApi = require('./error')
const BadRequestError = require('./badRequestError')
const AuthError = require('./unauthError')
const NotFoundError = require('./notFoundError')

module.exports = {
    ErrorApi,
    BadRequestError,
    AuthError,
    NotFoundError
}