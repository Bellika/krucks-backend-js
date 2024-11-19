const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({
  section_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
  name: { type: String, required: true },
  description: { type: String },
  grade: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Problem', ProblemSchema)