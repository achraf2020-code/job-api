const mongoose = require('mongoose')
const dbConnect = (url)=>{
    mongoose.connect(url)
        .then(()=>{
            console.log('Success Connect To Db')
        })
        .catch((error)=>{
            console.log('Error Not Connect To Db!')
        })
}
module.exports = dbConnect