const restful = require('node-restful')
const mongoose = restful.mongoose

const settings = new mongoose.Schema({
  email: { type: String, required: true },
  type: { type: String, required: true },
  autocomplete: { type: Boolean, required: true, default: false },
  microphone: { type: Boolean, required: true, default: false },
})

module.exports = restful.model('Settings', settings)
