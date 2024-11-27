const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const token = req.cookies.authToken

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized'})
  }

  try {
    const decode = jwt.verify(token, 'SECRET_TOKEN_HERE')
    req.user = decode
    next()
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(403).json({ message: 'Forbidden' });
  }
}

module.exports = { auth }

