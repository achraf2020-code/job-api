const express = require('express')
const dotenv = require('dotenv')

//app required files
const appRoutes = require('./routes')

//app configure
const app = express()
dotenv.config()
const port = process.env.PORT || 3000 
//app middleware
app.use(express.json())
app.use('/api/v1',appRoutes)

// app routes 
app.get('/',(req,res)=>{
    res.send('Wellcome to app')
})
//app db connect 


//app listen
app.listen(port,()=>{
    console.log(`Server Start At Port ${port}`)
})