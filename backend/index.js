import express, { json } from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'
import { connectDB } from './utils/db.js';
configDotenv(
    {
        path:"./.env"
    }
)


const {PORT , APP_URL } = process.env
const app = express() 

app.use(cors)
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan)

app.get('/', (req , res )=>{
    res.send("this is the ai ticket saas ")
})


app.listen(PORT || 5000, async ()=>{
    await connectDB()
    console.log(`server is running on port ${APP_URL}`)
}) ; 


