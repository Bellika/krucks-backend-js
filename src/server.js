const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use('/api/protected', require('./routes/protectedRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/crags', require('./routes/cragRoutes'))
app.use('/api/boulders', require('./routes/boulderRoutes'))
app.use('/api/sections', require('./routes/sectionRoutes'))
app.use('/api/problems', require('./routes/problemRoutes'))


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})