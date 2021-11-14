const {StatusCodes} = require('http-status-codes')
const notFound = (req,res)=>{
    res.status(StatusCodes.NOT_FOUND).json({error:'404 Error Route Not Found!'})
}
module.exports = notFound