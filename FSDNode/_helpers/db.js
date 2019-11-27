const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:Test123#@ds259865.mlab.com:59865/project-test', { useCreateIndex: true, useNewUrlParser: true }).then(()=>{
console.log('db connected');

}).catch(()=>{
    console.log('Error in db connection')
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};