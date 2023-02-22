const db = require('../db/db');

module.exports = {
  getAll: (product, page, count, sort) => {
    const queryOne = `SELECT * FROM reviews WHERE product_id = ${product} AND reported=false`;
    const results = [];
    return db.query(queryOne)
      .then((result) => {
        // console.log(result.rows);
        const adapter = ({ id: review_id, ...rest }) => ({ review_id, ...rest });
        const reviewPhotos = [];
        result.rows.forEach((review) => {
          const response = {
            ...adapter(review),
          };
          const queryTwo = `SELECT id, url from reviews_photos where review_id = ${review.id}`;
          reviewPhotos.push(db.query(queryTwo));
          delete response.reported;
          delete response.product_id;
          results.push(response);
        });
        return Promise.all(reviewPhotos);
      })
      .then((result) => {
        result.forEach((photos, index) => {
          results[index].photos = photos.rows;
        });
        // console.log(results.length);
        if (results.length > count) {
          return results.slice(((page - 1) * count), count * page);
        }
        return results;
      });
  },
  getMeta: (product) => {
    const ratingObject = {};
    const recommendedObject = { 0: 0 };
    const characteristicObject = {};
    const queries = [];
    const characteristics = []
    const queryOne = `SELECT id, rating, recommend FROM reviews where product_id = ${product}`;
    const queryTwo = `SELECT id, name FROM characteristics where product_id = ${product}`;
    return Promise.all([db.query(queryOne), db.query(queryTwo)])
      .then((result) => {
        // console.log(result[1].rows)
        const queryTime = {}
        result[0].rows.forEach(({ id, rating, recommend }) => {
          ratingObject[rating] = ratingObject[rating] || 0;
          ratingObject[rating] += 1;
          if (recommend) {
            recommendedObject[0] += 1;
          }
        });
        result[1].rows.forEach(({id, name}) => {
          characteristicObject[`${name}`] = {id : id};
          queries.push(db.query(`SELECT value FROM characteristic_reviews where characteristic_id = ${id}`));
        })
        // console.log(result[1].rows)
        // console.log(recommendedObject, ratingObject)
        return Promise.all(queries);
      })
      .then((result) => {
        // console.log(result[0].rows[0])
        Object.keys(characteristicObject).forEach((key, index) => {
          let total = 0;
          result[index].rows.forEach(value => {
            // console.log(value);
            total += value.value
          })
          // console.log(total);
          // console.log(result[index].rows.length)
          characteristicObject[`${key}`].value = JSON.stringify(total / result[index].rows.length);
        })
        result.forEach((characteristic, index) => {
          characteristic.rows
        })
        return {product_id: `${product}`, ratings: ratingObject, recommended: recommendedObject,
        characteristics: characteristicObject}
        // console.log(myObj)
      })
  },
  // addReview: () => {

  // },
  // markHelpful: () => {

  // },
  // reportReview: () => {

  // },
};
