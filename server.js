const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const morgan = require('morgan') 
const port = process.env.port || 5000

app.use(morgan('dev'))
app.set('view engine' , 'ejs')
app.use(express.static('public'))


// setting home page
app.get('/', (req,res)=>{
    //if(req.method === get)
    res.render('homepage')
})
// link for registeration
// app.get('/register', (req,res)=>{
//     //if(req.method === get)
//     res.render('register')
// })


app.listen(port, (err,result)=>{
    if(err) throw err
     console.log(`appliction listening to port ${port}...`)
    })