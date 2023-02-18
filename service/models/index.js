const db = require('../db/db');

module.exports = {
  getAll: (product) => {
    const query = `SELECT * FROM reviews WHERE product_id = ${product}`;
    return db.query(query);
  },
  getMeta: () => {

  },
  addReview: () => {

  },
  markHelpful: () => {

  },
  reportReview: () => {

  }
};