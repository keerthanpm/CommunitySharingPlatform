//var redis = require('redis');
var Queue = require('bee-queue');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var queue = new Queue('microservice');
//var client = redis.createClient();


var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/add', urlencodedParser, function (req, res) {
    // Add new post
    
    if (!req.body) return res.sendStatus(400)
    
    
    //client.set(id, 0);
    var job = queue.createJob({
        id: req.body.name,
        x: 0
    });
    job.on('succeeded', function (result) {
        console.log('completed job ' + job.id);
        //res.send('output: ' + result);
        res.sendStatus(200)
    });
    job.save(function (err, job) {
        if (err) {
          //console.log('job failed to save');
          return res.send('job failed to save');
        }
        //console.log('saved job ' + job.id);
      });
    });
    app.post('/incr', urlencodedParser, function(req,res){
        if (!req.body) return res.sendStatus(400)
        var job = queue.createJob({
            id: req.body.name,
            x: 1
        });
        job.on('succeeded', function (result) {
            //console.log('completed job ' + job.id);
            res.json({value: result});
        });
        job.save(function (err, job) {
            if (err) {
              //console.log('job failed to save');
              return res.send('job failed to save');
            }
            //console.log('saved job ' + job.id);
          });
    });
    
app.listen(5000);