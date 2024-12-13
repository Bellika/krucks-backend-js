const express = require('express')
const router = express.Router()
const { createBoulder, getBoulderWithSections, getBouldersByCragId, getBoulder } = require('../controllers/boulderController')

router.get('/crag/:crag_id', getBouldersByCragId)

router.get('/:boulder_id', getBoulder)

router.post('/', createBoulder)

module.exports = router
