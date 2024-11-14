const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  yearOfPassing: String,
  currentlyWorking: String,
  yearOfJoining: String,
  departmentCode: String,
  rollNumber: String,
  registrationNumber: String,
  password: String,
});

// Check if the model exists already to prevent overwriting
const registerModel = mongoose.models.RegisteredUser || mongoose.model('RegisteredUser', registerSchema);

module.exports = registerModel;
