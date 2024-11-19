const Section = require('../models/Section')

const createSection = async (req, res) => {
  const { boulder_id, name, description } = req.body

  try {
    const newSection = new Section({ boulder_id, name, description })
    const section = await newSection.save()
    res.status(201).json(section)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createSection }