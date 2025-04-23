const User = require('../models/User');

const isAuthenticated = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).send('Not authenticated');
  }

  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(401).send('User not found');
    }
    req.user = user; // Attach user to request
    next();
  } catch (err) {
    return res.status(500).send('Authentication failed');
  }
};

module.exports = { isAuthenticated };
