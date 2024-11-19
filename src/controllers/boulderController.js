const Boulder = require('../models/Boulder')

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

module.exports = { createBoulder }