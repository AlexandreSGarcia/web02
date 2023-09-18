var express = require('express');
var router = express.Router();

const LISTFILM = [
  {
    id: 1,
    title: 'harry potter',
    duration: 120,
    budget:100000,
    link:'http test de film'
  },
  {
    id: 1,
    title: '300',
    duration: 110,
    budget:200012,
    link:'http test de film'
  },
  {
    id: 1,
    title: 'pierate des caraibe',
    duration: 220,
    budget:1005000,
    link:'http test de film'
  },

];

// Read all the movies from the catalogue
router.get('/', (req, res, next) => {
  console.log('GET /movies');
  res.json(LISTFILM);
});

module.exports = router;
