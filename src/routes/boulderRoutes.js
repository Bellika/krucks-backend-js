const express = require('express')
const router = express.Router()
const { createBoulder, getBoulderWithSections } = require('../controllers/boulderController')

router.get('/:boulder_id', getBoulderWithSections)

router.post('/', createBoulder)

module.exports = router
