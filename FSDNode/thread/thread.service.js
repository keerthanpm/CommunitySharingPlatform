const axios = require('axios');
const Thread = require('./thread.model');

module.exports = {
    createThread,
    createPost,
    search,
    get,
    getAll, 
    like,
    getlikes
    
};

async function createThread (title, post,id ) {
    const thread = new Thread({
        title: title,
        post: post,
        userId: id,
        likes: 0
           
        
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
    return await Thread.findOneAndUpdate(threadId, {$push: {comment: {post:post,user_id:id}}}).then(success => {
        return axios.post('http://127.0.0.1:5000/incr', {
            name: threadId
        }).then(resp => {
            return resp.data.value;
        })
        .catch(error => {
            console.log(error);            
        })
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
async function like (id,threadId) {
    
    return await Thread.findOneAndUpdate(threadId, {$addToSet: {likes: id}}).then(success => {
        return axios.post('http://127.0.0.1:5000/incr', {
            name: threadId
        }).then(resp => {
            return resp.data.value;
        })
        .catch(error => {
            console.log(error);            
        })
    })
}

async function getlikes (threadId) {
    Thread.aggregate([ {$project: {_id: threadId,
        total: { $size: "$likes" }}}])
    .then(thread => {
        return thread;
    })
    .catch(error => {
        return error;            
    })
}