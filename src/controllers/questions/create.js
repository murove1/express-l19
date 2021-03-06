const _ = require('lodash');
const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware');

const create = ({ Question }, { config }) => async (req, res, next) => {
  try {
    const question = new Question();
    if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }
    _.extend(question, req.body);
    const saved = await question.save();

    return sendCreated(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
