var client = require('./client')


// client.rpush('testLists','a');
// client.rpush('testLists','b');
// client.rpush('testLists','c');
// client.lpush('testLists',888);

client.rpop('testLists',function(err,v) {
  console.log(err,v)
})


client.lrange('testLists',0,-1,function(err,lists) {
  console.log(err,lists)
});
