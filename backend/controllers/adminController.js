const bcrypt = require('bcryptjs');
const registerModel = require('../models/Registermodel');

// Load environment variables


// Admin Login
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  console.log('Received login request:', username, password);

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  res.status(200).json({ message: "Admin logged in successfully" });
};

// Get all users (for admin)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await registerModel.find(); // Fetch all registered users
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await registerModel.findByIdAndDelete(userId); // Remove the user by ID
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};
