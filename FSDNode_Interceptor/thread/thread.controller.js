const express = require('express');
const router = express.Router();
const request = require('request');
const jwt = require('_helpers/jwt');

router.post('/create', createThread);
router.post('/post', createPost);
router.get('/get', get);
router.get('/search',search);
router.post('/like', like);
router.get('/yourfeed',yourfeed);
router.get('/deleteThread',deleteThread);
router.get('/myPosts',myPosts);
router.post('/updateThread', updateThread);
router.get('/searchByTags',searchByTags);
router.get('/latestTags',latestTags);

function createThread(req, res, next) {    
   
    if(req.body.title && req.body.post&&req.body.userId&&req.body.tags) {
        request.post(
            'http://localhost:2222/thread/create',
            { json: { title: req.body.title,
                post: req.body.post,
                userId: req.body.userId,
                tags: req.body.tags,
                image: req.body.image
             } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.sendStatus(200);
                }else{
                   
                        res.sendStatus(500);
                    }
                }
            
        );
    }}

function createPost(req, res, next) {
    if(req.body.threadId && req.body.post && req.body.userId) {
        request.post(
            'https://thread-service.herokuapp.com/thread/post',
            { json: { threadId: req.body.threadId,
                post: req.body.post,
                userId: req.body.userId
             } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.sendStatus(200)
                }else{
                    
                            res.sendStatus(500);
                        
                }
            }
        );
    } else {
        res.sendStatus(400);
    }
}

function get (req, res, next) {
    
    let url = 'https://thread-service.herokuapp.com/thread/get'
    if(req.query.threadId) {
       
        var propertiesObject = { threadId: req.query.threadId };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
                    res.json(json);
        });
    } else {
        var propertiesObject = {};

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
          res.json(json);
        });
    }
}



function search(req,res){
    if(req.query.searchTerm){
        let url = 'https://thread-service.herokuapp.com/thread/search'
    
       
        var propertiesObject = { searchTerm: req.query.searchTerm };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
          res.json(json);
        });

}else{
    res.sendStatus(400);
}
}
function like(req,res){
    if(req.body.id&& req.body.threadId ){
        
        request.post(
            'https://thread-service.herokuapp.com/thread/like',
            { json: { id: req.body.id,
                threadId: req.body.threadId,
                
                
             } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                   // let json = JSON.parse(body);
                   
                    res.json(200);
                }else{
                    res.sendStatus(500);
                }
            }
        );
    } else {
        
        res.sendStatus(400);
    }

}
function yourfeed(req,res){
    if(req.query.userId){
        let url = 'https://thread-service.herokuapp.com/thread/yourfeed'
    
       
        var propertiesObject = { userId: req.query.userId };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
          res.json(json);
        });

}else{
    res.sendStatus(400);
}
}
function deleteThread(req,res){
    if(req.query.threadId){
        let url = 'https://thread-service.herokuapp.com/thread/deleteThread'
    
      // console.log('here in interceptor');
        var propertiesObject = { threadId: req.query.threadId };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          res.send(200);
        });

}else{
    res.sendStatus(400);
}
}
function myPosts(req,res){
    if(req.query.userId){
        let url = 'https://thread-service.herokuapp.com/thread/myPosts'
    
       
        var propertiesObject = { userId: req.query.userId };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
          res.json(json);
        });

}else{
    res.sendStatus(400);
}
}
function updateThread(req, res, next) {    
    // console.log(req.body.threadId)
   
    if(req.body.threadId && req.body.post && req.body.title && req.body.tags) {
        request.post(
            'https://thread-service.herokuapp.com/thread/updateThread',
            { json: { threadId: req.body.threadId,
                post: req.body.post,
                userId: req.body.userId,
                title: req.body.title,
                tags: req.body.tags,
                image: req.body.image
             } },
            function (error, response, body) {
                
                if (!error && response.statusCode == 200) {
                    res.sendStatus(200);
                    
                }else{
                    console.log(response);
                    res.sendStatus(response.statusCode);
                }
            }
        );
    }
    else{
        res.sendStatus(400);
    }
}

function searchByTags(req,res){
    if(req.query.searchTerm){
        let url = 'https://thread-service.herokuapp.com/thread/searchByTags'
        
       
        var propertiesObject = { searchTerm: req.query.searchTerm };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
          res.json(json);
        });

}else{
    res.sendStatus(400);
}
}
function latestTags (req, res, next) {
    
    let url = 'https://thread-service.herokuapp.com/thread/latestTags'
  
        var propertiesObject = {};

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          let json = JSON.parse(body);
          res.json(json);
        });
    }

module.exports = router;