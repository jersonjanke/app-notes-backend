const express = require('express')
const auth = require('./auth')
const scoreService = require('../api/score/scoreService')

module.exports = function (server) {
  /*
   * Rotas protegidas por Token JWT
   */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  protectedApi.use(auth)
  scoreService.register(protectedApi, '/score')

  /*
   * Rotas abertas
   */
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/authService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
  // openApi.post('/change-password', AuthService.changePassword)
}
