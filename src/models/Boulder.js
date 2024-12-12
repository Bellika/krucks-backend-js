const mongoose = require('mongoose')

const BoulderSchema = new mongoose.Schema({
  crag_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Crag', required: true },
  name: { type: String, required: true },
  description: { type: String },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  }
}, { timestamps: true })

BoulderSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Boulder', BoulderSchema)