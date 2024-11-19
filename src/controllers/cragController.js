const Crag = require('../models/Crag')
const Boulder = require('../models/Boulder')
const Section = require('../models/Section')
const Problem = require('../models/Problem')

const getAllCrags = async (req, res) => {
  try {
    const crags = await Crag.find()
    res.status(200).json(crags)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

const getCragWithBoulders = async (req, res) => {
  const { crag_id } = req.params

  try {
    const crag = await Crag.findById(crag_id)
    if (!crag) {
      return res.status(404).json({ message: 'Crag not found' })
    }

    const boulders = await Boulder.find({ crag_id: crag_id })
    const bouldersWithSections = await Promise.all(
      boulders.map(async (boulder) => {
        
        const sections = await Section.find({ boulder_id: boulder._id })
        const sectionsWithProblems = await Promise.all(
          sections.map(async (section) => {
            const problems = await Problem.find({ section_id: section._id })
            return { ...section._doc, problems }
          })
        )
        
        return { ...boulder._doc, sections: sectionsWithProblems }
      })
    )

    res.status(200).json({ crag, boulders: bouldersWithSections })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

const createCrag = async (req, res) => {
  const { name, description } = req.body

  try {
    const newCrag = new Crag({ name, description })
    const crag = await newCrag.save()
    res.status(201).json(crag)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createCrag, getCragWithBoulders, getAllCrags }