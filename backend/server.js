import express from "express"
import { configDotenv } from "dotenv"
configDotenv()
import cors from 'cors'
import pg from "pg"
import cookieParser from "cookie-parser"
const { Pool } = pg
const pool = new Pool()
const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())


import installationRouter from './routes/installationRouter.js'
import userRouter from './routes/userRouter.js'


app.use('/api/service/installation' , installationRouter)
app.use('/api/user' , userRouter)




pool.connect((err , client , done) => {
    if(err){
        console.log(`error connecting to database` , err)
    } else {
        console.log(`connected to database`)
    }
    done()
})


app.listen(process.env.PORT, () => {
    console.log(`server has started on port ${process.env.PORT}`)
})
