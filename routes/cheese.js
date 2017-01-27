const express = require('express');
const router = express.Router();
const Query = require('../db/query.js');

function validCheese(cheese) {
  let validTitle = typeof cheese.name == 'string' &&
                    cheese.name.trim() != '';
  let validImage = typeof cheese.image == 'string' &&
                    cheese.image.trim() != '';
  return validTitle && validImage;
}
router.get('/', (req, res, next) => {
  Query
    .getAllCheese()
    .then((response) => {
      res.json(response);
    });
});

router.post('/new', (req, res, next) => {
  if (validCheese(req.body)) {
    Query
      .createNewCheese(req.body)
      .then((response) => {
        res.json({
          id: response
        });
      });
  } else {
    next(new Error('Invalid cheese entry'));
  }
});

router.get('/:id', (req, res, next) => {
  Query
    .getCheeseById(req.params.id)
    .then((response) => {
      if (response) {
        res.json(response);
      } else {
        next(new Error('Cheese does not exist'));
      }
    });
});

router.put('/:id', (req, res, next) => {
  if (validCheese(req.body)) {
    Query
      .updateCheese(req.params.id, req.body)
      .then((response) => {
        if (response) {
          res.json({
            id: response
          });
        } else {
          next(new Error('Invalid update'));
        }
      });
  } else {
    next(new Error('Invalid cheese'));
  }
});

router.delete('/:id', (req, res, next) => {
  Query
    .deleteCheese(req.params.id)
    .then((response) => {
      if (response) {
        res.json({
          message: 'Cheese has been deleted!'
        });
      } else {
        next(new Error('Cheese does not exist!'));
      }
    });
});

module.exports = router;
