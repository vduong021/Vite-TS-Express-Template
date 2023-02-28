const express = require('express');
const path = require('path');
const router = require('./routes/api');

const app = express();
const PORT = 5555;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../src')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/api', router);

// 404 Error Handler
app.use((req, res, next) => {
  const error = new Error('Page not found');
  error.status = 404;
  next(error);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err.stack,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
