const port = process.env.PORT | 3003
const host = '0.0.0.0'

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, host, function () {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
