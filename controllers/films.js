const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = express.Router();

filmRouter.get('/:id', function(req, res) {
  const index = req.params.id;
  res.json({film: films[index]})
})

filmRouter.post('/', function(req, res) {
  const newFilm = new Film(req.body);
  films.push(newFilm);
  res.json({films: films})
})

filmRouter.get('/', function(req, res) {
  res.json({films: films});
})

module.exports = filmRouter;
