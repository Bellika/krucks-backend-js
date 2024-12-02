const mongoose = require('mongoose')

const CragSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true},
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

CragSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Crag', CragSchema)