const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDatabase = require('./database/connectDB');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

// Connect to the database
connectDatabase();


app.use(cors({
    origin: 'http://localhost:3000',  // Adjust to your frontend URL
    methods: ['GET', 'POST','DELETE'],
    credentials: true
  }));
app.use(express.json());

// Importing Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Using Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes); // Admin routes are prefixed with /api/admin

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
