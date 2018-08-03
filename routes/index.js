var mongoose = require('mongoose').Types.ObjectId;
var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/get_products', function (req, res, next) {

  // use mongoose to get all todos in the database
  Product.find(function (err, products) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(products); // return all todos in JSON format
  });
});

router.get('/get_products/:category?', function (req, res, next) {
  var category = req.params.category
  // use mongoose to get all todos in the database
  Product.find({category: category}, function (err, products) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(products); // return all todos in JSON format
  });
});

router.get('/todo', function(req, res, next) {
  res.render('todo', { title: 'Todo' });
});

module.exports = router;
