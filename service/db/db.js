require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});
// eslint-disable-next-line arrow-body-style
// const executeSqlFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         pool.query(data, (err, res) => {
//           console.log(data);
//           if (err) {
//             reject(err);
//           } else {
//             console.log('SQL queries executed successfully');
//             resolve(res);
//           }
//         });
//       }
//     });
//   });
// };
// executeSqlFile('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/service/db/damn.sql')
// .then(() => {
//   console.log('Complete');
  // executeSqlFile('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/service/db/reviews.sql')
// })
// .then(()=>{
// executeSqlFile('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/service/db/reviews_photos.sql')
// })
// .then(()=>{
// executeSqlFile('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/service/db/characteristics.sql')
// })
// .then(()=>{
// executeSqlFile('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/service/db/characteristic_reviews.sql')
// })
// .catch((error) => {
//   console.error(error);
// });
module.exports = pool;