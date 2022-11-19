const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

console.log('Servidor em execução...')

// app.route('/').get((req, res) => {
//   res.send('Servidor em execução...')
// })

// app.route('/sobre').get((req, res) => {
//   res.send('Hello Sobre')
// })

// app.route('/').post((req, res) => {
//   console.log(req.body)

//   res.send(req.body)
// })

// let author = 'Gabriel'

// app.route('/').get((req, res) => {
//   res.send({ author })
// })

// app.route('/').put((req, res) => {
//   let lastAuthor = author
//   author = req.body.newAuthor
//   let newAuthor = author

//   res.send({ lastAuthor, newAuthor })
// })

let author = 'Gabriel'

app.route('/:identificador').delete((req, res) => {
  author = ''

  res.send(`ID: ${req.params.identificador} apagado!`)
})

// app.route('/').get((req, res) => {
//   axios.get()
// })
