const express = require('express')
const app = express()
const port = 3000
const getData = require("..data/data");


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/api/data", (req, res) => {
  res.json(getData()); 
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})