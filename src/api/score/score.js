const restful = require('node-restful')
const mongoose = restful.mongoose

const scoreSchema = new mongoose.Schema({
  email: { type: String, required: true },
  score: { type: Number, required: true },
  life: { type: Number, required: true, default: 5 },
  done: { type: Boolean, required: true, default: false },
  dateGame: { type: Date, required: true, default: Date.now },
  notes: [{ level: Number, correct: String, selected: String }],
})

module.exports = restful.model('Score', scoreSchema)
