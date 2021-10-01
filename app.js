const express = require('express')
// const db = require('./dbConnection')

const app = express()
const linguagens = require('./mockup')

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {

  res.render('index', {linguagens: linguagens})

});

// Start Server
app.listen(3000, () => {
  console.log('Servidor rodando com express')
 });