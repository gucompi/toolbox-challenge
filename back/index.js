const express = require('express')
const app = express()
const port = 3000
const rootController = require('./controllers/root.controller')
const filesController = require('./controllers/files.controller')
var cors = require('cors')

app.use(cors())

app.get('/', rootController())

app.get('/files/data', filesController())




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

