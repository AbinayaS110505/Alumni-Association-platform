const express = require('express');
const { adminLogin, getAllUsers, deleteUser } = require('../controllers/adminController');

const router = express.Router();

// Admin login route
router.post('/login', adminLogin);

// Admin actions (no authentication middleware)
router.get('/users', getAllUsers); // Get users
router.delete('/user/:userId', deleteUser); // Delete a user

module.exports = router;
