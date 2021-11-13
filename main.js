const express = require('express')
const dotenv =  require('dotenv')


//app required files

const appRoutes = require('./routes')
const dbConnect = require('./db/dbConnect')
const notFound  = require('./middlewars/404')
const errorHandler = require('./middlewars/errorHandler')

//app configure
const app = express()
dotenv.config()
const port = process.env.PORT || 3000 
//app middleware
app.use(express.json())
app.use('/api/v1',appRoutes)
app.use(notFound)
app.use(errorHandler)

// app routes 
app.get('/',(req,res)=>{
    res.send('Wellcome to app')
})
//app db connect 
dbConnect(process.env.MONGO_URL)
//app listen
app.listen(port,()=>{
    console.log(`Server Start At Port ${port}`)
})