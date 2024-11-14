const registerModel = require('../models/Registermodel');
const bcrypt = require('bcryptjs');

// Registration controller
exports.registerUser = async (req, res) => {
  try {
    const { name, email, phone, yearOfPassing, currentlyWorking, yearOfJoining, departmentCode, rollNumber, registrationNumber, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new registerModel({
      name,
      email,
      phone,
      yearOfPassing,
      currentlyWorking,
      yearOfJoining,
      departmentCode,
      rollNumber,
      registrationNumber,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

// Login controller
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await registerModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If login is successful, send success message
    res.json({
      message: 'Login successful!',
      userId: user._id,  // Optionally send user ID or other data if needed
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed due to server error' });
  }
};