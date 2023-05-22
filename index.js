//import express
const express=require('express')

//create the server    or app or call it anything
const server=express()


//multer
const multer=require('multer')

// import cors used for connect with front end
const cors=require('cors')
const logic=require('./service/logic')
server.use(cors({origin:'http://localhost:3000'}))


//need to convert json type data from front end req to javascript
server.use(express.json())

//port setting for server
server.listen(8000,()=>{
    console.log('server started at port number 8000');
})
server.get('/getmemories',(req,res)=>{
    logic.allMemories().then(result=>{
            res.status(result.statusCode).json(result)
    })
})

server.post('/addMemory',(req,res)=>{
    logic.addMemories(req.body.id,req.body.title,req.body,req.body.date,req.body.description,req.body.image).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.delete('/deleteMemory/:id',(req,res)=>{
    logic.removeMemory(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.get('/getaMemory/:id',(req,res)=>{
    logic.getaMemory(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/update',(req,res)=>{
    logic.editaMemory(req.body.mid,req.body.memTitle,req.body.memDetails,req.body.memImage,req.body.date).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
