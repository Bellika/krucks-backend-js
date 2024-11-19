const express = require('express')
const router = express.Router()
const { createCrag, getCragWithBoulders, getAllCrags, updateCrag, deleteCrag } = require('../controllers/cragController')

router.get('/:crag_id', getCragWithBoulders)

router.get('/', getAllCrags)

router.post('/', createCrag)

router.put('/', updateCrag)

router.delete('/', deleteCrag)

module.exports = router