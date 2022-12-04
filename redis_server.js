class redis_server {

    redisConnect() {

        const redis = require('redis');

        const redisClient = redis.createClient('0.0.0.0', 6379);

        redisClient.connect();

        redisClient.on('error', err => {
            console.log('Error ' + err);
        });

        return redisClient;
    }

    setData(data) {
        var redisClient = this.redisConnect();
        redisClient.set('countries', data,{EX: 30,NX: true,});
    }

    getData(callBack) {
        var redisClient = this.redisConnect();
        var resp = redisClient.get('countries');

        resp.then(function(result) {
            callBack(null, result)
        });
    }
}

module.exports = redis_server;
