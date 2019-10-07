const express = require('express'),
  cors = require('./cors'),
  server = express(),
  port = process.env.PORT || 8080,
  host = process.env.HOST || '127.0.0.1',
  bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, host, ()=>{console.log(`RestFull App with PORT: ${port} and IP:${host} `)
})
module.exports = server
