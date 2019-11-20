const  mongoose =  require('mongoose');

const threadModel = mongoose.Schema({
    title: String,
    post: String,
    date: Date,
    username: String,
    likes:  [
        {
            type: String, sparse:true
        }
    ] ,
    comment: { type : Array , "comment" : [{
       post: String,
       username: Number,
       date: Date

}]

}
    
});

module.exports = mongoose.model('Thread', threadModel);