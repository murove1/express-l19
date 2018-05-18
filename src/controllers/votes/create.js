const _ = require('lodash');
const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware');

const create = ({ Vote }, { config }) => async (req, res, next) => {
  try {
    const vote = new Vote();

    _.extend(vote, req.body);
    await vote.save();

    return sendCreated(res, { vote });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
