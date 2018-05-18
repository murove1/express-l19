const _ = require('lodash');
const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware');

const create = ({ Answer }, { config }) => async (req, res, next) => {
  try {
    const answer = new Answer();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }
    _.extend(answer, req.body);
    await answer.save();

    return sendCreated(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
