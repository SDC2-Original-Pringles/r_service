require('dotenv').config();
const Redis = require('ioredis') ;

const redis = new Redis({
  'port': 6379,
  'host': '127.0.0.1'
})
// const endpoint = `${DB_HOST}::${DB_PORT}/api/reviews/?product_id=80356`

module.exports = redis;