const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User({ username, password });  // ❌ don't hash here
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: 'Registration failed' });
  }
};



exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Login attempt:", username, password); // 🔍 Debug log

    const user = await User.findOne({ username });
    if (!user) {
      console.log("❌ User not found");
      return res.status(400).json({ error: 'Invalid credentials - user not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch); // 🔍 Debug log

    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(400).json({ error: 'Invalid credentials - wrong password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    console.log("✅ Login successful!");
    res.json({ token });
  } catch (err) {
    console.error("🔥 Login error:", err.message);
    res.status(500).json({ error: 'Login failed' });
  }
};
