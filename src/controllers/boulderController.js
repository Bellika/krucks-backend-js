const Boulder = require('../models/Boulder')
const Section = require('../models/Section')
const Problem = require('../models/Problem')

const getBouldersByCragId = async (req, res) => {
  const { crag_id } = req.params

  try {
    const boulders = await Boulder.find({ crag_id: crag_id})
    res.status(200).json(boulders)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const getBoulderWithSections = async (req, res) => {
  const { boulder_id } = req.params

  try {
    const boulder = await Boulder.findById(boulder_id)
    if (!boulder) {
      return res.status(404).json({ message: 'Boulder not found'})
    }

    const sections = await Section.find({ boulder_id: boulder._id })
    const sectionsWithProblems = await Promise.all(
      sections.map(async (section) => {
        const problems = await Problem.find({ section_id: section._id })
        return { ...section._doc, problems }
      })
    )

    res.status(200).json({ boulder, sections: sectionsWithProblems })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const createBoulder = async (req, res) => {
  const { crag_id, name, description, lng, lat } = req.body

  if (!name || !description || lng == null || lat == null) {
    return res.status(400).json({ message: 'All fields are required'})
  }

  try {
    const newBoulder = new Boulder({ 
      crag_id, 
      name, 
      description,
      location: {
        type: 'Point',
        coordinates: [lng, lat]
      } })
    const boulder = await newBoulder.save()
    res.status(201).json(boulder)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createBoulder, getBoulderWithSections, getBouldersByCragId }