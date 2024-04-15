require('dotenv').config()
const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('as')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login here</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})