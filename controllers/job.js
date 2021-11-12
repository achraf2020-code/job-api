require('express-async-errors')
const errorMessages = require('../messages/ErrorMessages')
module.exports ={
    getAllJob:async(req,res)=>{
        res.send('get all job')
    },
    getOneJob:async(req,res)=>{
        res.send('get one job')
    },
    CreateJob:async(req,res)=>{
        res.send('create job')
    },
    updateOneJob:async(req,res)=>{
        res.send('update one job')
    },
    deleteOneJob:async(req,res)=>{
        res.send('delete on job')
    }
}