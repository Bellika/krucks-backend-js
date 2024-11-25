const User = require('../models/User')

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password} = req.body
  try {
    const newUser = new User({ firstName, lastName, email, password })
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { registerUser }