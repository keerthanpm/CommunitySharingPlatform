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
       username: String,
       date: Date,
       replies:{ type:Array,"replies":[{
        username: String,
        post:String
    }]
 }

}]

},
tags: String,
image_url: String
    
});

module.exports = mongoose.model('Thread', threadModel);