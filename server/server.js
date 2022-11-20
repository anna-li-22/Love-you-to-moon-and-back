const express = require('express')
const path = require('path')
const poem = require('./routes/Poem')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/poems', poem)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
