const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')

const PORT = 3000

app.use(cookieParser())
app.use(session({ secret: 'keyboard cat'}))
app.use(express.urlencoded( { extended: true}))
app.set('views', './src/views')
app.set('view engine', 'pug')

// app.post('/', (req,res)=>{
//     const color = req.body.color
//     res.cookie("color", color)
//     res.render('index', { 
//         title: "dwdwadwadwa", 
//         color:color})
// })

app.get('/', (req,res) =>{
    req.session.product_1 = 0
    req.session.product_2 = 0
    req.session.product_3 = 0
    
    res.render('index', { 
        title: "dwdwadwadwa", 
        color:req.cookies.color})
})

app.get('/product_1', (req,res) =>{
            
    res.render('rostom', { 
        title: "dwdwadwadwa", 
    })
})
app.get('/product_2', (req,res) =>{
            
    res.render('joni', { 
        title: "dwdwadwadwa", 
    })
})
app.get('/product_3', (req,res) =>{
            
    res.render('merabi', { 
        title: "dwdwadwadwa", 
    })
})

app.post('/register_1', (req, res) => {
    const quantity = req.body.quantity
    req.session.product_1 = +req.session.product_1 + (+quantity)
    res.render('index', {
        title: "DEMO Title", 
        quantity_1: req.session.product_1 })
})
app.post('/register_2', (req, res) => {
    const quantity = req.body.quantity
    req.session.product_2 = +req.session.product_2 + (+quantity)
    res.render('index', {
        title: "DEMO Title", 
        quantity_2: req.session.product_2 })
})
app.post('/register_3', (req, res) => {
    const quantity = req.body.quantity
    req.session.product_3 = +req.session.product_3 + (+quantity)
    res.render('index', {
        title: "DEMO Title", 
        quantity_3: req.session.product_3 })
})
app.get('/summary', (req,res) =>{
    res.render('summary', {
        title:'summary',
        quantity_1: +req.session.product_1,
        quantity_2: +req.session.product_2,
        quantity_3: +req.session.product_3
    })
})



app.listen(PORT, () =>{
    console.log(`Server on Port - ${PORT}`)
})
