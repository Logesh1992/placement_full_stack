const express = require('express');
require('dotenv').config()
path=require('path')
const port = process.env.PORT
var mdb = require('mongoose')


let app = express();

mdb.connect("mongodb://localhost:27017/placement")
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((e)=>{
    console.log(e);
})



app.get('/',(req,res)=>{
    res.send('Hello World!')
})


app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.listen(port,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
