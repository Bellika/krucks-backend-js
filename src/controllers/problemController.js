const Problem = require('../models/Problem')

const createProblem = async (req, res) => {
  const { section_id, name, description, grade } = req.body

  try {
    const newProblem = new Problem({ section_id, name, description, grade })
    const problem = await newProblem.save()
    res.status(201).json(problem)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createProblem }