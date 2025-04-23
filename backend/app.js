const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config();

const app = express();

// 👇 FIRST use cors
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

// 👇 THEN use session
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/authApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/appointments', appointmentRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
