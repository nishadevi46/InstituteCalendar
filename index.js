const express = require('express')
const app = express()
const port = process.env.PORT || 8000
app.use(express.json())
app.get('/',async(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log(`successfully connected to port ${port}`)
})