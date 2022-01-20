const Score = require('./score')

Score.methods(['get', 'post', 'put', 'delete'])
Score.updateOptions({ new: true, runValidators: true })

module.exports = Score
