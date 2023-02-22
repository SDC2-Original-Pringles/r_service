const fs = require('fs');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
// const csv = require('csv');
const csv = require('csv-parser');
// const EOL = require('os').EOL;
// const pgtools = require('pgtools');

const readStream = fs.createReadStream('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/data/reviews.csv');
const writeStream = fs.createWriteStream('/Users/arpanshrestha/Desktop/HackReactor/SDC/r_service/data/cleanReview.csv');

const csvStringifier = createCsvStringifier({
  header: [
    { id: 'id', title: 'id' }, { id: 'product_id', title: 'product_id' }, { id: 'rating', title: 'rating' }, { id: 'date', title: 'date' }, { id: 'summary', title: 'summary' }, { id: 'body', title: 'body' }, { id: 'recommend', title: 'recommend' }, { id: 'reported', title: 'reported' }, { id: 'reviewer_name', title: 'reviewer_name' }, { id: 'reviewer_email', title: 'reviewer_email' }, { id: 'response', title: 'response'}, {id: 'helpfulness', title: 'helpfulness' }
  ],
});

writeStream.write(csvStringifier.getHeaderString());

readStream.pipe(csv())
  .on('data', (row) => {
    const date = new Date(parseInt(row.date));
    row.date = JSON.stringify(date.toISOString());
    row.summary = JSON.stringify(row.summary);
    row.body = JSON.stringify(row.body);
    row.reviewer_name = JSON.stringify(row.reviewer_name);
    row.reviewer_email = JSON.stringify(row.reviewer_email);
    if (row.response !== 'null') {
      row.response = JSON.stringify(row.response);
    }
    writeStream.write(`${row.id},${row.product_id},${row.rating},${row.date},${row.summary},${row.body},${row.recommend},${row.reported},${row.reviewer_name},${row.reviewer_email},${row.response},${row.helpfulness}\n`);
  })
  .on('end', () => {
    console.log('Data cleaning and transform complete');
  });