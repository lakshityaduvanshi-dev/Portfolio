const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS Middleware (Sabhi origins ko allow karne ke liye)
app.use(cors({
  origin: '*', 
  credentials: true
}));

app.use(express.json());

// MongoDB Atlas Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas Cloud Database Connected Successfully! ☁️✅'))
  .catch((err) => {
    console.error('Atlas Connection Error ❌:', err.message);
    console.log('Tip: MongoDB Atlas Dashboard > Network Access me IP 0.0.0.0/0 added hona chahiye.');
  });

// Contact Form Schema & Model
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// 1. Root Route (Direct URL check ke liye)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Backend server is live and running!'
  });
});

// 2. Contact Form API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation check
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please fill in all fields (Name, Email, Message)' 
      });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Message saved successfully!' 
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// 3. Render Dynamic Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});