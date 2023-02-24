const models = require('../models');
const redis = require('../cache/cache');

module.exports = {
  getReviewsByProduct: (req, res) => {
    // console.log(req.query);
    // res.status(200).send("Hello")
    let {
      page,
      count,
      sort,
      product_id,
    } = req.query;
    page = page || 1;
    count = count || 5;
    // return redis.get(`getAll: ${[product_id, page, count, sort]}`)
    // .then((result) => {
    //   if (result) {
    //     result = JSON.parse(result);
    //     return result;
    //   } else {
    //     return  models.getAll(product_id, page, count, sort)
    //   }})
    return models.getAll(product_id, page, count, sort)
    .then((result) => {
        // console.log(result);
        // redis.set(`getAll: ${[product_id, page, count, sort]}`, JSON.stringify(result), 'EX', 7200)
        res.status(200).send({product: product_id, page: page, count: count, results: result});
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  getReviewMetaData: (req, res) => {
    // return redis.get(`getMeta: ${req.query.product_id}`)
    // .then((result)=> {
    //   if (result) {
    //     result = JSON.parse(result);
    //     return result;
    //   } else {
    //     return models.getMeta(req.query.product_id);
    //   }})
    return models.getMeta(req.query.product_id)
    .then((result) => {
        // redis.set(`getMeta: ${req.query.product_id}`, JSON.stringify(result), 'EX', 3600);
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  addReview: (req, res) => {
    models.addReview(req.body)
      .then(() => {
        res.status(201).send('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setHelpfulReview: (req, res) => {
    models.markHelpful(req.params.review_id)
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  reportReview: (req, res) => {
    models.reportReview(req.params.review_id)
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
