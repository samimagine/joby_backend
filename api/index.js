const express = require('express');
const mockData = require('./data/mockData');

const app = express();

app.get('/data', (req, res) => {
  res.json(mockData);
});

module.exports = app;