const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS setup (Production + Localhost support)
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // Vercel URL ya sab allow karne ke liye
  credentials: true
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas Cloud Database Connected Successfully! ☁️✅'))
  .catch((err) => {
    console.error('Atlas Connection Error ❌:', err.message);
    console.log('Tip: Dashboard par check karein ki aapne Network Access me IP Address (0.0.0.0/0) allow kiya hai ya nahi.');
  });

// Schema & Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// 1. Root Route (Taaki browser me 'Not Found' na aaye)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Backend server is live and running!'
  });
});

// 2. Contact API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Dynamic Port Binding for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});