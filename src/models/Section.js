const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({
  boulder_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Boulder', required: true },
  name: { type: String, required: true },
  description: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('Section', SectionSchema)