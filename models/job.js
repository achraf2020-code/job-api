const mongoose = require('mongoose')
const {Schema} = mongoose

const jobSchema = new Schema({
    position:{
        type:String,
        trim:true,
        required:[true,'Position is required!'],
        minlength:[3,'Position is too short!'],
        maxlength:[20,'Position is too logn!']
    },
    company:{
        type:String,
        trim:true,
        required:[true,'Company is required!'],
        minlength:[3,'Company is too short!'],
        maxlength:[20,'Company is too logn!']
    },
    status:{
        type:String,
        enum:["interview","declined","pending"],
        default:'interview'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    }

},{timestamps:true})

module.exports = mongoose.model('Jobs',jobSchema)