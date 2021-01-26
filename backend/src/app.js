require('./db/mongoose');

const express = require('express');
const todoRouter = require('./models/todo');

const app = express();

app.use(express.json());

module.exports = app;
