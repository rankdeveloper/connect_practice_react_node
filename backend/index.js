const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.json())



app.get('/' , (req , res) => {
    res.json({message:'Home page from the server'})
})

app.get('/about' , (req , res) => {
    res.json({message:'About page from the server'})
})

app.listen(5000 , () => {
    console.log("Server is listening at port 5000...")
})