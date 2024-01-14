const express = require('express');
const router = require('../router');
const path = require('path');
const cookieParser = require('cookie-parser');
const { auth } = require('../middleware/authMiddleware');



const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(router);

module.exports = app;