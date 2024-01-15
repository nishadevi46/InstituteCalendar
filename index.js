import express from 'express'
const app = express()
import Connection from './database/db.js'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 8000
app.use(express.json())
app.get('/',async(req,res)=>{
    res.send('hello')
})


const USERNAME = process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL= process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@calender.d5whsbu.mongodb.net/?retryWrites=true&w=majority`;
Connection(URL)


app.listen(port,()=>{
    console.log(`successfully connected to port ${port}`)
})