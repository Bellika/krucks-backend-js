const express = require('express')
const router = express.Router()
const { getCrag ,createCrag, getCragWithBoulders, getAllCrags, updateCrag, deleteCrag } = require('../controllers/cragController')

router.get('/list/:crag_id', getCragWithBoulders)

router.get('/:crag_id', getCrag)

router.get('/', getAllCrags)

router.post('/', createCrag)

router.put('/', updateCrag)

router.delete('/', deleteCrag)

module.exports = router