const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const productSchema = mongoose.Schema({
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
});

const reviewSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  rating: Number,
  date: Date,
  summary: String,
  body: String,
  recommend: Boolean,
  reported: Boolean,
  reviewer_name: String,
  reviewer_email: String,
  response: String,
  helpfulness: Number,
});

const reviewPhotoSchema = mongoose.Schema({
  review_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
  photo_url: String,
});

let characteristicSchema = mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  name: String,
});

let characteristicReviewSchema = mongoose.Schema({
  characteristic_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Characteristic' },
  review_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
});