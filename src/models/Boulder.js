const mongoose = require('mongoose')

const BoulderSchema = new mongoose.Schema({
  crag_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Crag', required: true },
  name: { type: String, required: true },
  description: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('Boulder', BoulderSchema)