const User = require('../models/User');
const { isAuthenticated } = require('../middleware/authMiddleware');

// Register handler
exports.register = async (req, res) => {
  const { name, email, phone, role, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).send('Email already registered');

    const user = await User.create({ name, email, phone, role, password });
    req.session.userId = user._id;
    res.status(201).send('Registered successfully');
  } catch (error) {
    res.status(500).send('Registration failed');
  }
};

// Login handler
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }

    req.session.userId = user._id;
    res.status(200).send('Logged in successfully');
  } catch (error) {
    res.status(500).send('Login failed');
  }
};

// Logout handler
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).send('Logout failed');
    res.clearCookie('connect.sid');
    res.send('Logged out successfully');
  });
};

// Get current user handler
exports.getCurrentUser = (req, res) => {
  res.status(200).json(req.user);
};

// Authentication middleware check
exports.isAuthenticated = isAuthenticated;
