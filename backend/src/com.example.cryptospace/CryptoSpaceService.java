// Assuming this file resides within your backend project (not directly in the frontend)

const express = require('express');
const mongoose = require('mongoose'); // Database library

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Define your Mongoose schema for user data (replace with your desired fields)
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  virtualCurrency: { type: Number, default: 100000 }, // Starting virtual currency
  cryptoHoldings: { type: Object, default: {} } // Object to store cryptocurrency holdings (crypto: quantity)
});

const User = mongoose.model('User', userSchema);

// Connect to your MongoDB database (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/cryptospaceservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB database'))
.catch(error => console.error('Error connecting to MongoDB:', error));

// Sample API endpoints (replace with actual logic):

// User registration (replace with secure password hashing)
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// User login (replace with secure password validation)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || password !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.json({ message: 'Login successful!', user }); // Send relevant user data
  } catch (error) {
    res.status(500).json({ message: 'Error logging in user' });
  }
});

// Get user data (replace with access control)
app.get('/user/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Send sanitized user data (exclude password)
  } catch (error) {
    res.status(500).json({ message: 'Error getting user data' });
  }
});

// Implement API endpoints for buying/selling cryptocurrency (updating user holdings and virtual currency)
// ...

app.listen(port, () => console.log(`CryptoSpace service listening on port ${port}`));


