var redis = require('redis');

module.exports = redis.createClient(6379, 'localhost');


// redis-server /etc/redis.conf


// redis-cli -p 6379
