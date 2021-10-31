const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./routes/router')

app.use(cors());
app.use(express.json());
app.use('/', Router);

module.exports = app;