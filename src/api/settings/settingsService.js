const Settings = require('./settings')

Settings.methods(['get', 'post', 'put', 'delete'])
Settings.updateOptions({ new: true, runValidators: true })

module.exports = Settings
