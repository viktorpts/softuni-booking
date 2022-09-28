const mongoose = require('mongoose');


const connStr = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/softuni-booking';

module.exports = async (app) => {
    try {
        await mongoose.connect(connStr, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected');
    } catch (err) {
        console.error('Error initializing database');
        console.error(err.message);
        process.exit(1);
    }
};