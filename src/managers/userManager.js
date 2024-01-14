const User = require('../models/User');

const generateToken = require('../utils/generateToken');

exports.register = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (user) {
        throw new Error('Email already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser);

    return token;
}