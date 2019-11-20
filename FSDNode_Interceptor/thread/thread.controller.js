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


function createThread(req, res, next) {    
   
    if(req.body.title && req.body.post&&req.body.userId) {
        request.post(
            'http://localhost:5000/thread/create',
            { json: { title: req.body.title,
                post: req.body.post,
                userId: req.body.userId
             } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.sendStatus(200);
                }else{
                    res.sendStatus(response.statusCode);
                }
            }
        );
    }}

function createPost(req, res, next) {
    if(req.body.threadId && req.body.post && req.body.userId) {
        request.post(
            'http://localhost:5000/thread/post',
            { json: { threadId: req.body.threadId,
                post: req.body.post,
                userId: req.body.userId
             } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.sendStatus(200)
                }else{
                    res.sendStatus(response.statusCode);
                }
            }
        );
    } else {
        res.sendStatus(400);
    }
}

function get (req, res, next) {
    
    let url = 'http://localhost:5000/thread/get'
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
        let url = 'http://localhost:5000/thread/search'
    
       
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
    if(req.body.id&& req.body.threadId){
        
        request.post(
            'http://localhost:5000/thread/like',
            { json: { id: req.body.id,
                threadId: req.body.threadId
                
             } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    let json = JSON.parse(body);
                   
                    res.json(json);
                }else{
                    res.sendStatus(response.statusCode);
                }
            }
        );
    } else {
        
        res.sendStatus(400);
    }

}
function yourfeed(req,res){
    if(req.query.userId){
        let url = 'http://localhost:5000/thread/yourfeed'
    
       
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


module.exports = router;