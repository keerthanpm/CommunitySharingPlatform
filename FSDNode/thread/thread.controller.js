const express = require('express');
const router = express.Router();
const threadService = require('./thread.service');

router.post('/create', createThread);
router.post('/post', createPost);
router.get('/get', get);
router.get('/search',search);
router.post('/like', like);
router.get('/yourfeed',yourfeed);
router.get('/deleteThread', deleteThread)
router.post('/updateThread', updateThread)
router.get('/myPosts', myPosts)
router.get('/searchByTags',searchByTags);
router.get('/latestTags',latestTags);
router.post('/postReply', createPostReply);


function createThread(req, res, next) {    
    if(req.body.title && req.body.post&&req.body.userId && req.body.tags) {
        let commaTags = req.body.tags.replace(/[ ,]+/g, ",");
        commaTags = ','+commaTags+',';
        let imageUrl = req.body.image.replace(/[ ,]+/g, ",");
        threadService.createThread(req.body.title, req.body.post,req.body.userId,commaTags,imageUrl)
        .then((threadId) => {res.json({threadId});
        })
        .catch(err => next(err))
    } else {
        res.json(400);
    }
}

function createPost(req, res, next) {
    if(req.body.threadId && req.body.post && req.body.userId) {
        threadService.createPost(req.body.threadId, req.body.post,req.body.userId)
        .then(res.sendStatus(200))
        .catch()
    } else {
        res.sendStatus(400);
    }
}

function createPostReply(req, res, next) {
    if(req.body.timestamp && req.body.post &&req.body.username  && req.body.threadId) {
        threadService.createPostReply(req.body.timestamp, req.body.post,req.body.threadId,req.body.username)
        .then(res.sendStatus(200))
        .catch()
    } else {
        res.sendStatus(400);
    }
}

function get (req, res, next) {
    
    
    if(req.query.threadId) {
       
        threadService.get(req.query.threadId)
        .then(thread => { res.json(thread)})
        .catch(err => next(err))
    } else {
        threadService.getAll()
        .then(thread => { res.json(thread)})
        .catch(err => next(err))
    }
}


function search(req,res){
    if(req.query.searchTerm){
        let search = req.query.searchTerm;
        threadService.search(search).then(thread => { res.json(thread)})
        .catch(err => next(err))

}else{
    res.sendStatus(400);
}
}
function like(req,res){
    if(req.body.id&& req.body.threadId){
        
        let like_id = req.body.id;
        let threadId = req.body.threadId;
       
        threadService.like(like_id,threadId).then((value) => {            
            res.json({value});
        }).catch(err => console.log(err))
    } else {
        
        res.sendStatus(400);
    }

}
function yourfeed(req,res){
    if(req.query.userId){
        
        threadService.yourfeed(req.query.userId).then(thread => { res.json(thread)})
        .catch(err => next(err))

}else{
    res.sendStatus(400);
}}
function deleteThread(req,res){
    if(req.query.threadId){
        threadService.deleteThread(req.query.threadId).then(thread=>{res.send(200)}).catch(err=>res.send(err))
    }
    else{
            res.send(400);
    }
}
function updateThread(req,res){
    if(req.body.threadId&&req.body.post&&req.body.title&&req.body.tags){
        let imageUrl = req.body.image.replace(/[ ,]+/g, ",");
        threadService.updateThread(req.body.threadId,req.body.post,req.body.title,req.body.tags,imageUrl).then(thread=>{res.send(200)}).catch(err=>res.send(err))
    }
    else{
            res.send(400);
    }
}
function myPosts(req,res){
    if(req.query.userId){
        
        threadService.myPosts(req.query.userId).then(thread => { res.json(thread)})
        .catch(err => next(err))

}else{
    res.sendStatus(400);
}}

function searchByTags(req,res){
    if(req.query.searchTerm){
        let search = req.query.searchTerm;
        threadService.searchByTags(search).then(thread => { res.json(thread)})
        .catch(err => next(err))

}else{
    res.sendStatus(400);
}
}
function latestTags(req,res){
    
       
        threadService.latest().then(thread => { res.json(thread)})
        .catch(err => next(err))

}

module.exports = router;