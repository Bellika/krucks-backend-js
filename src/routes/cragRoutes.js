const express = require('express')
const router = express.Router()
const { createCrag, getCragWithBoulders, getAllCrags } = require('../controllers/cragController')

router.get('/:crag_id', getCragWithBoulders)

router.get('/', getAllCrags)

router.post('/', createCrag)

module.exports = router