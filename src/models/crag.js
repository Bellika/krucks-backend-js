const mongoose = require('mongoose')

const CragSchema = new mongoose.Schema({
  name: { type: String, reqiuired: true },
  description: { type: String }
}, { timeStamps: true })

module.exports = mongoose.model('Crag', CragSchema)