const User = require('../models/User');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user) {
        throw new Error('Username already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser);

    return token;
};

exports.login = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (!user) {
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(userData.password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
    }

    const token = await generateToken(user);

    return token;
}