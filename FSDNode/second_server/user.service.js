const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');
const User = db.User;
module.exports = {
    
    getById
};
async function getById(id) {
    return await User.findById(id).select('-hash');
    console.log('testing');
}