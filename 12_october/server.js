const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const path = require('path')

const PORT = 3000

app.use(cookieParser('cipher'))
app.use(express.urlencoded( { extended: true}))
app.set('views', './src/views')
app.set('view engine', 'pug')

// app.get('/', (req,res)=>{
//     res.cookie("username", "Jano Bokuchava")
//     res.cookie("cart", {item:[1,2,3]})
//     res.cookie("forever", 1, { maxAge:6000})
//     res.cookie('signed', 'random text', { signed: true})
//     res.send('vaimeeee')
// })

// app.get('/cookies', (req,res) =>{
//     res.write(`<h1>Username - ${req.cookies.username}</h1>`)
//     res.write(`<h1>forever - ${req.cookies.forever}</h1>`)
//     res.write(`<h1>Cart - ${req.cookies.cart.item.join(' ')}</h1>`)
//     res.write(`<h1>Signed - ${req.signedCookies['signed']}</h1>`)
//     res.end()
// })

// app.get('/clear', (req,res) =>{
//     res.clearCookie('cart')
//     res.clearCookie('username')
//     res.send(`Cookies has been removed`)
// })


app.post('/', (req,res)=>{
    const color = req.body.color
    res.cookie("color", color)
    res.render('index', { 
        title: "dwdwadwadwa", 
        color:color})
})

app.get('/', (req,res) =>{
            
    res.render('index', { 
        title: "dwdwadwadwa", 
        color:req.cookies.color})
})

app.listen(PORT, () =>{
    console.log(`Server on Port - ${PORT}`)
})


