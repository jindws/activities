// var redis = require('redis');
//
// var client = redis.createClient(6379, 'localhost');
var client = require('./client')

Object.prototype.toString = function() {
    return JSON.stringify(this)
}

client.set('hello', {
    a: 1,
    b: 2
});

client.get('hello', (err, v) => console.log(v))
