const  mongoose =  require('mongoose');

const threadModel = mongoose.Schema({
    title: String,
    post: String,
    userId: String,
    likes:  [
        {
            type: String, sparse:true
        }
    ] ,
    comment: { type : Array , "comment" : [{
       post: String,
       user_id: Number

}]

}
    
});

module.exports = mongoose.model('Thread', threadModel);