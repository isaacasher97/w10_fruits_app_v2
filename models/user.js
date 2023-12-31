const mongoose = require('./connection');

const { Schema, model} = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, require: true }
})

const User = model('user', userSchema);

module.exports = User;