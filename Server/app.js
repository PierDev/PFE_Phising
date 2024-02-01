const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ping', (req, res) => {
  console.log("Server pinged from: ", req.query.ip)
  res.send('Successfuly pinged!')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})