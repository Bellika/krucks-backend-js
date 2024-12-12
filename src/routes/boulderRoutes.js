const express = require('express')
const router = express.Router()
const { createBoulder, getBoulderWithSections, getBouldersByCragId } = require('../controllers/boulderController')

router.get('/crag/:crag_id', getBouldersByCragId)

router.get('/:boulder_id', getBoulderWithSections)

router.post('/', createBoulder)

module.exports = router
