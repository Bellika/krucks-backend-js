const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use(express.json())

app.use('/api/crags', require('./routes/cragRoutes'))
app.use('/api/boulders', require('./routes/boulderRoutes'))
app.use('/api/sections', require('./routes/sectionRoutes'))
app.use('/api/problems', require('./routes/problemRoutes'))


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})