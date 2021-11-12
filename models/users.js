const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Name is required!"],
        maxlength:[20,'Name is too long!'],
        minlength :[3,'Name is too short!']
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email Not valid!'],
        required:[true,'Email is required!'],
        unique:[true,'Email already exist!']
    },
    password:{
        type:String,
        trim:true,
        required:[true,'Password is required!'] ,
    }
},{timestamps:true})

module.exports = mongoose.model('Users',userSchema);