var redis = require('redis');
var client = redis.createClient();
var Queue = require('bee-queue');
var queue = new Queue('microservice');


client.on('connect', function() {
    console.log('connected');
});
queue.on('ready', function () {
  queue.process(function (job, done) {
    console.log('processing job ' + job.id);
    setTimeout(function () {
    if(job.data.x==0){
        client.get(job.data.id, function(err, reply) {
            console.log(reply);
            if(reply==null){
                done(null);
            }else{
            done(null, client.set(job.data.id, 0));}
        });
        }
    else{
        client.incr(job.data.id)
        client.get(job.data.id, function(err, reply) {
          console.log(reply);
          done(null, reply);
      });
        
      }
    }, 10);
  });

  console.log('processing jobs...');
});