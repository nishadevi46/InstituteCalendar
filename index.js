import express from 'express'
const app = express()
import Connection from './database/db.js'
import Router from './router/route.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()
const port = process.env.PORT || 8000
app.use(express.json())

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Router)
const USERNAME = process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL= process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.poffjrh.mongodb.net/?retryWrites=true&w=majority`;
Connection(URL)


app.listen(port,()=>{
    console.log(`successfully connected to port ${port}`)
})