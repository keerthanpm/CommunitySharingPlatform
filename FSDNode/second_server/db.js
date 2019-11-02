const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/course-information', { useCreateIndex: true, useNewUrlParser: true }).then(()=>{
console.log('db connected');

}).catch(()=>{
    console.log('Error in db connection')
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};