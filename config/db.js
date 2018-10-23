const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/instadb';

mongoose.connect(mongoDB);


mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.Schema = mongoose.Schema

module.exports = db;