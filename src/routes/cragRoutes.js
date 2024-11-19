const express = require('express')
const router = express.Router()
const { createCrag, getCragWithBoulders } = require('../controllers/cragController')

router.get('/:crag_id', getCragWithBoulders)

router.post('/', createCrag)

module.exports = router