const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String
});
const collectionName = 'names';

module.exports = mongoose.model('Users', userSchema, collectionName);