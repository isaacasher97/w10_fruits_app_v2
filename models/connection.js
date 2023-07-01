require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

//Establish mongodb connection
mongoose.connect(DATABASE_URL);

mongoose.connection
.on("open", () => {console.log('Connected to Mongo')})
.on("close", () => {console.log('Disconnected from Mongo')})
.on("error", (err) => {console.log(err.message)});

//Export the mongoose object
module.exports = mongoose;