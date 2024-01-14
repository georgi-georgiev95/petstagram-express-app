const mongoose = require('mongoose');
const { DB_URI } = require('../utils/constants');

module.exports = () => mongoose.connect(DB_URI);