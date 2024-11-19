const Boulder = require('../models/Boulder')
const Section = require('../models/Section')
const Problem = require('../models/Problem')

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
  const { crag_id, name, description } = req.body

  try {
    const newBoulder = new Boulder({ crag_id, name, description })
    const boulder = await newBoulder.save()
    res.status(201).json(boulder)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createBoulder, getBoulderWithSections }