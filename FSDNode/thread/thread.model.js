const  mongoose =  require('mongoose');

const threadModel = mongoose.Schema({
    title: String,
    post: String,
    userId: Number,
    likes: { type : Array , "likes" : [
        {
            like: String
        }
    ] },
    comment: { type : Array , "comment" : [{
       post: String,
       user_id: Number

}]

}
    
});

module.exports = mongoose.model('Thread', threadModel);