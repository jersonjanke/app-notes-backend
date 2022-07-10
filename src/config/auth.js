const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

module.exports = (req, res, next) => {
  // CORS preflight request
  if (req.method === 'OPTIONS') {
    next()
  } else {
    const token =
      req.body.token || req.query.token || req.headers['authorization']

    if (!token) {
      return res.status(403).send({ errors: ['No token provided.'] })
    }

    client
      .verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
      })
      .then((ticket) => {
        const payload = ticket.getPayload()
        const userid = payload['sub']

        if (userid) {
          next()
        }
      })
      .catch(() => {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
          if (err) {
            return res.status(403).send({
              errors: ['Failed to authenticate token.'],
            })
          } else {
            // req.decoded = decoded
            next()
          }
        })
      })
  }
}
