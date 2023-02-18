const models = require('../models');

module.exports = {
  getReviewsByProduct: (req, res) => {
    // console.log(req.query);
    // res.status(200).send("Hello")
    models.getAll(req.query.product_id)
      .then((result) => {
        console.log(result.rows);
        res.status(200).send(result.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  getReviewMetaData: (req, res) => {
    models.getMeta(req.query)
      .then((result) => {
        res.status(200).send(result.data);
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
