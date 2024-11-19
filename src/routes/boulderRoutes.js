const express = require('express')
const router = express.Router()
const { createBoulder } = require('../controllers/boulderController')

router.post('/', createBoulder)

module.exports = router
