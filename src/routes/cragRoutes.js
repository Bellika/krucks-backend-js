const express = require('express')
const router = express.Router()
const { createCrag } = require('../controllers/cragController')

router.post('/', createCrag)

module.exports = router