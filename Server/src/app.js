const express = require('express')
const {
  db,
  getCibleIDByEmail
 } = require("./database")
const {send_email_mult} = require("./mail")

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ping', (req, res) => {
  console.log("Server pinged from: ", req.query.ip)
  res.send('Successfuly pinged!')
})



app.get('/send', async (req, res) => {
  const id = await getCibleIDByEmail('pierre2vaug@gmail.com');
  console.log("Returned: ", id);
  // send_email_mult([
  //   'pierre2vaug@gmail.com', 
  //   'devaugirau@cy-tech.fr'
  // ], "Test 1", "Bonjour comment va ?")
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})