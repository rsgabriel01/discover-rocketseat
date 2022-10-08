const express = require('express')

const app = express()

app.listen('3000')

console.log('Servidor em execução...')

// app.route('/').get((req, res) => {
//   res.send('Servidor em execução...')
// })

// app.route('/sobre').get((req, res) => {
//   res.send('Hello Sobre')
// })

//middleware
app.use(express.json())

app.route('/').post((req, res) => {
  console.log(req.body)

  res.send(req.body)
})
