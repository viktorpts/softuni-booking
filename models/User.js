const { Schema, model } = require('mongoose');


const roleSchema = new Schema({
    value: { type: String, enum: ['user', 'admin'] }
});

const userSchema = new Schema({
    username: { type: String, minlength: 3 },
    hashedPassword: { type: String, required: true },
    roles: { type: [roleSchema], default: ['user'] }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;