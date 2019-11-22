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


function createThread(req, res, next) {    
    if(req.body.title && req.body.post&&req.body.userId) {
        threadService.createThread(req.body.title, req.body.post,req.body.userId)
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
        .then((value) => {            
            res.json({value});
        })
        .catch(err => next(err))
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
    if(req.body.threadId&&req.body.post&&req.body.title){
       
        threadService.updateThread(req.body.threadId,req.body.post,req.body.title).then(thread=>{res.send(200)}).catch(err=>res.send(err))
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



module.exports = router;