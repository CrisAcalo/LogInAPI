const mongoose = require("mongoose");

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const CLUSTER = encodeURIComponent(config.dbCluster);

//mongodb+srv://duck:duck@cluster0.14yil8d.mongodb.net/
const URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.mongodb.net/${config.dbName}`;

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectDB;
