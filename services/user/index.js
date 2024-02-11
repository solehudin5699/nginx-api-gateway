const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/user', (req, res) => {
  res.send('Hello World! From user service.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})