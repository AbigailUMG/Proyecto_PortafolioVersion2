const express = require('express')
const hbs = require('hbs');

require('dotenv').config();

const port = process.env.PORT

const app = express()

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname+'/views/partials')

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/AcercaDe', (req, res) => {
    res.render('AcercaDe')
})

app.get('/Portafolio', (req, res) => {
    res.render('Portafolio')
})

app.get('/Contacto', (req, res) => {
    res.render('Contacto')
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    
})

