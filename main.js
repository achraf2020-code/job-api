const express = require('express')
const dotenv =  require('dotenv')
//security pakages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')

//swagger
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')

//app required files

const appRoutes = require('./routes')
const docPageRoutes = require('./routes/docPage')
const dbConnect = require('./db/dbConnect')
const notFound  = require('./middlewars/404')
const errorHandler = require('./middlewars/errorHandler')

//app configure
const app = express()
dotenv.config()
const port = process.env.PORT || 3000 
//app middleware
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit:100
}))

app.use(express.json())
// app.use('/api-doc',docPageRoutes)
app.use('/',swaggerUi.serve,swaggerUi.setup(swaggerDoc))

app.use('/api/v1',appRoutes)
app.use(notFound)
app.use(errorHandler)


//app db connect 
dbConnect(process.env.MONGO_URL)
//app listen
app.listen(port,()=>{
    console.log(`Server Start At Port ${port}`)
})