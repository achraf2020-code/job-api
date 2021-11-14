require('express-async-errors')
const {StatusCodes} = require('http-status-codes')
const Jobs = require('../models/job')
const errorMessages = require('../messages/ErrorMessages')
const {NotFoundError} = require('../CustomErrors')
module.exports ={
    getAllJob:async(req,res)=>{
        // console.log(req.user)
        const {id,name} = req.user
        const jobs = await Jobs.find({createdBy:id}) 
        res.status(StatusCodes.OK).json({jobs,nbrHits:jobs.length})
        // res.send('get all job')
    },
    getOneJob:async(req,res)=>{
        const jobId = req.params.id
        const {id} = req.user
        const job = await Jobs.findOne({_id:jobId,createdBy:id})
        if(!job){
            throw new NotFoundError(errorMessages.NotFoundError)
        }
        res.status(StatusCodes.OK).json({job})
        res.send('get one job')
    },
    CreateJob:async(req,res)=>{
        const {id,name} = req.user
        const {position,company,status} = req.body
        const createdJob = {
            position:position,
            company:company,
            status:status,
            createdBy:id,
        }
        const job = await Jobs.create(createdJob)
        res.status(StatusCodes.OK).json(job)
        // res.send('create job')
    },
    updateOneJob:async(req,res)=>{
        const jobId = req.params.id
        const {id} = req.user
        const {position,company,status} = req.body
        const updatedInfo = {
                position:position,
                company:company,
                status:status,
        }
        const updatedJob = await Jobs.findOneAndUpdate({_id:jobId,createdBy:id},updatedInfo,{new:true,runValidator:true})
        if(!updatedJob){
            throw new NotFoundError(errorMessages.NotFoundError)
        }
        res.status(StatusCodes.OK).json(updatedJob)
    },
    deleteOneJob:async(req,res)=>{
        const jobId = req.params.id
        const {id} = req.user
        const deletedJob = await Jobs.findOneAndDelete({_id:jobId,createdBy:id})
        if(!deletedJob){
            throw new NotFoundError(errorMessages.NotFoundError)
        }
        res.status(StatusCodes.OK).json(deletedJob)

    }
}