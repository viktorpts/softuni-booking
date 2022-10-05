const bcrypt = require('bcrypt');
const User = require('../models/User');


async function register(username, password) {
    // check if username is taken
    const existing = await User.findOne({ username });
    if (existing) {
        throw new Error('Username is taken');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save user
    const user = await User.create({
        username,
        hashedPassword
    });

    // return user data
    return {
        username,
        roles: user.roles
    };
}

async function login(username, password) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect username or password');
    }

    return {
        _id: user._id,
        username: user.username,
        roles: user.roles
    };
}

module.exports = {
    register,
    login
};