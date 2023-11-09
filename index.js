const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6600;

// Connect to MongoDB
mongoose.connect('mongodb+srv://sharmatarun:XwigoCcpRZcRjCLW@cluster0.3mykgwp.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error', err => {
  console.log('Connection Fail.... Please check & Connect again');
});

mongoose.connection.on('connected', connected => {
  console.log('Successfully Connected!! Hurrah!!');
});

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());

// Import the CRUD routes from another file
const crudRoutes = require('./routes/crud');
app.use('/api/books', crudRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
