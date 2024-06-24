const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Configuration
const MONGO_URI = "mongodb+srv://aashishashu712:C2qrhzQcsiLaRofx@cluster0.v7sxbrj.mongodb.net/resumebuilder";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Mongoose Schemas
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Schema definition
const resumeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  objective: String,
  experience: String,
  education: [{ institution: String, degree: String, year: String }],
  skills: String,
});

const Resume = mongoose.model('Resume', resumeSchema);

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
app.post('/api/resume', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email in the database
    const user = await User.findOne({ email });

    // If user is not found, respond with 404 Not Found status
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords do not match, respond with 400 Bad Request status
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // If credentials are valid, create a JWT token with user's id as payload
    const token = jwt.sign({ userId: user._id }, 'Ashish', { expiresIn: '1h' });

    // Respond with the generated token
    res.json({ token });
  } catch (error) {
    // Handle any server errors that might occur
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
