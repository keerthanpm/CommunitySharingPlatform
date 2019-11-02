const  mongoose =  require('mongoose');

const threadModel = mongoose.Schema({
    title: String,
    post: { type : Array , "default" : [] }
    
});

module.exports = mongoose.model('Thread', threadModel);