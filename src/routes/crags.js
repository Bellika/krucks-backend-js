const express = require('express')
const router = express.Router()
const Crag = require('../models/crag')

router.post('/', async (req, res) => {
  const { name, description } = req.body

  try {
    const newCrag = new Crag({
      name,
      location,
    })
    const crag = await newCrag.save()
    res.status(201).json(crag)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router