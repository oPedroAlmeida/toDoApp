require('./db/mongoose');

const express = require('express');
const todoRouter = require('./routers/todo');

const app = express();

app.use(express.json());
app.use(todoRouter);

module.exports = app;
