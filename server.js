const express = require('express');
const cors = require('cors');
const categoryRoutes = require('./routes/categories-routes');
const listingRoutes = require('./routes/listings-routes.js');
const testimonialsRoutes = require('./routes/testimonials-routes.js')
const authRoutes = require('./routes/authRoutes.js')
const dotenv = require('dotenv');

const app = express();
const PORT = 5050;

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // static files -- images served public


// Routes
app.use("/categories", categoryRoutes);
app.use("/listings", listingRoutes);
app.use('/testimonials', testimonialsRoutes);
app.use('/login', authRoutes);


// Home route
app.get('/', (req, res) => {
    res.send("Hello, Welcome to Home Route");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
