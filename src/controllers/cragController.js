const Crag = require('../models/Crag')

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

module.exports = { createCrag }