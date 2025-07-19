require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');

const app = express();
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || origin.endsWith(".vercel.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/flashcards', flashcardRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
