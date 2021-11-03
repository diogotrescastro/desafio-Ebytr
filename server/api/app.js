const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('../routes/router')

app.use(cors());
app.use(express.json());
app.use('/todo', Router);

module.exports = app;