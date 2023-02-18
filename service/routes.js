const router = require('express').Router();

const controllers = require('./controllers');

// router.get('/reviews/meta', controllers.getReviewMetaData);

router.get('/reviews', controllers.getReviewsByProduct);

// router.post('/reviews', controllers.addReview);

// router.put('/reviews/:review_id/helpful', controllers.setHelpfulReview);

// router.put('/reviews/:review_id/report', controllers.reportReview);

module.exports = router;
