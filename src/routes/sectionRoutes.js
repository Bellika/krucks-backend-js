const express = require('express')
const router = express.Router()
const { createSection } = require('../controllers/sectionController')

router.post('/', createSection)

module.exports = router