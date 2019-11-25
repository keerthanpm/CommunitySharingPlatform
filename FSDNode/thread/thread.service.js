const axios = require('axios');
const Thread = require('./thread.model');

module.exports = {
    createThread,
    createPost,
    search,
    get,
    getAll, 
    like,
    yourfeed,
    deleteThread,
    updateThread,
    myPosts,
    searchByTags
};

async function createThread (title, post,id,tags,image ) {
    const thread = new Thread({
        title: title,
        post: post,
        username: id,
        date: Date.now(),
        tags:tags,
        image_url: image
        
    });
    return await thread.save().then(res => {
        axios.post('http://127.0.0.1:5000/add', {
            name: res._id
        }).then(resp => {
            console.log(resp.data);
        })
        .catch(error => {
            console.log(error);            
        })
        return res._id;});
}

async function createPost (threadId, post,id) {
    console.log('Id of thread:'+threadId)
    return await Thread.findByIdAndUpdate(threadId, {$push: {comment: {post:post,username:id,date:Date.now()}}}).then(success => {
       res.sendStatus(200);
    }).catch(error=>{
        res.send(500)
    })
}

async function getAll() {
    
    return await Thread.find({})
    .then(thread => {
        return thread;
    })
    .catch(error => {
        return error;            
    })
}

async function get (threadId) {
    return await Thread.findById(threadId)
    .then(thread => {
        return thread;
    })
    .catch(error => {
        return error;            
    })
}

async function search (searchTerm){
    return await Thread.find({ "title": { $regex: '.*' + searchTerm + '.*' } }).then(
        thread => {
            return thread;
        }).catch(error => {
            return error;            
        });
    
}
async function yourfeed (searchTerm){
    console.log('here');
console.log(searchTerm);
    return await Thread.find({ "likes":{$in: searchTerm}  }).then(
        thread => {
            console.log(thread)
            return thread;
        }).catch(error => {
            return error;            
        });
    
}
async function like (id,threadId) {
    let CurrentThread = Thread.findById(threadId)
    return await Thread.update(CurrentThread, {$addToSet: {likes: id}}).then(success => {
        
    
    }).catch(error => {
            console.log(error);            
        })
    
}
async function deleteThread(threadId){
    
    return Thread.findByIdAndDelete(threadId).catch(error=>{
        
    }).catch(error=>{
        console.log(error);
    })
}

async function updateThread(threadId,newpost,newtitle, tag){
   
   console.log(tag);
    return await Thread.findByIdAndUpdate(threadId, {$set: {title: newtitle, post: newpost, tags: tag}}).then(success => {
        res.sendStatus(200);
     }).catch(error=>{
         res.send(500)
     })
}
async function myPosts (id){
    
    return await Thread.find({ "username":{$in: id}  }).then(
        thread => {
            console.log(thread)
            return thread;
        }).catch(error => {
            return error;            
        });
    
}


async function searchByTags (searchTerm){
    return await Thread.find({ "tags": { $regex: '.*' +','+ searchTerm + ',' + '.*' } }).then(
        thread => {
            return thread;
        }).catch(error => {
            return error;            
        });
    
}