const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = express.Router();

filmRouter.get('/:id', function(req, res) {
  const index = req.params.id;
  res.json({film: films[index]})
})

filmRouter.get('/', function(req, res) {
  res.json({data: films});
})

module.exports = filmRouter;
