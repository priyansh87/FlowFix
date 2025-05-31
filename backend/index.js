import express, { json } from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'
import { connectDB } from './utils/db.js';
import ticketRoutes from './routes/ticket.route.js'
import userRoutes from './routes/user.routes.js'
import { serve } from 'inngest/express'
import { inngest } from './inngest/client.js';
import { onUserSignup } from './inngest/functions/onSignup.js'
import { onTicketCreated } from './inngest/functions/onTicketCreate.js';
configDotenv(
    {
        path:"./.env"
    }
)


const {PORT , APP_URL } = process.env
const app = express() 

app.use(cors(
    {
        origin:"*" , credentials:true
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))


app.use('/api/auth' , userRoutes)
app.use('/api/tickets' , ticketRoutes)

app.use(
    "/api/inngest" , 
    serve(
        {
            client : inngest , functions: [onUserSignup , onTicketCreated]
        }
    )
)


app.get('/', (req , res )=>{
    res.send("this is the ai ticket saas ")
})


app.listen(3000, async ()=>{
    await connectDB()
    console.log(`server is running on port ${APP_URL}`)
}) ; 


