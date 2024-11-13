const express =require('express')
const JSON =require('JSON')

const app =express()
const PORT = 3000;

const data ='{"breafast":"bread-butter","lunch":"daal-chawal"}'
// const json=JSON.parse(data)

app.get('/',(req,res)=>{
    res.send("Server is runnnig!!")
})

app.get('/menu',(req,res)=>{
    res.send(JSON.parse(data))
})

app.post('/items',(req,res)=>{
    res.status(201).send({
        "name":"Mango Juice",
        "price":50,
        "taste":"sweet",
        "ingredients":["Mango","Water","Juice"]
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})

