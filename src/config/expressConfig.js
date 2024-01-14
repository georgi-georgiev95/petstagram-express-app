const express = require('express');
const router = require('../router');
const path = require('path');


const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(router);

module.exports = app;