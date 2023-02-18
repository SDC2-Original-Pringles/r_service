require('dotenv').config();
const {Pool} = require('pg');
// const fs = require('fs');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});
pool.connect();

// fs.readFile('./service/db/postgres.sql', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   client.query(data, (err, res) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('SQL queries executed successfully');
//     client.end();
//   });
// });

module.exports = pool;
