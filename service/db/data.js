const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('../data/reviews.csv')
  .pipe(csv())
  .on('data', (data)=> {
    console.log(data);
    results.push(data);
  })
  .on('end', () => {
    console.log(results);
  });
