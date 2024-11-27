const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const { login } = require('../controllers/authController')

router.get('/me', auth, (req, res) => {
  res.json({ user: req.user})
})

router.post('/login', login)

module.exports = router