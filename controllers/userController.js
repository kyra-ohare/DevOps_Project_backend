const boom = require('boom');
const User = require('../models/User.js');

// get users
exports.getUsers = async (req, reply) => {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// get single user
/**
 * testing
 * @param {*} req 
 * @param {*} reply 
 */
exports.getSingleUser = async (req, reply) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// add a user
exports.addUser = async (req, reply) => {
    try {
        const user = new User({ ...req.body });
        return user.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

// deletes a user
exports.deleteUser = async (req, reply) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndRemove(id);
        return user;
    } catch (err) {
        throw boom.boomify(err);
    }
}