const { Router: router } = require('express');
const { authenticate } = require('../../middleware');

const { get } = require('./get');
const { list } = require('./list');
const { getUserData } = require('./getUserData');

/**
 * Provide api for questions
 *
 *
 * GET /api/v1/users/ - List
     @header
            Authorization: Bearer {token}
     @optionalQueryParameters
           search {String} - value to search
           limit {Number} - count of item to send
           skip {Number} - value to search
 *
 *
 * **/

module.exports = (models, { config }) => {
  const api = router();

  api.get('/', list(models, { config }));
  api.get('/my', authenticate, getUserData(models, { config }));
  api.get('/:_id', get(models, { config }));

  return api;
};
