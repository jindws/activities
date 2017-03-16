var client = require('./client')

client.sadd('testSet',1);
client.sadd('testSet',2);
client.sadd('testSet',2);

client.smembers('testSet',function(err,v) {
  console.log(v)
})
