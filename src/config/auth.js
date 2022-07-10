const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(
  '829625549487-m7dvtef9obacodq027b6j7eegt3p6oon.apps.googleusercontent.com'
)

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

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '829625549487-m7dvtef9obacodq027b6j7eegt3p6oon.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();
    const userid = payload['sub'];

    if (userid) {
      next()
    } else {
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
    }
  }
}
