const _ = require('lodash');
const { sendDeleted } = require('../../middleware');

const remove = ({ Question }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const question = await Question.findOne({ _id });
    await Question.remove({ _id });

    return sendDeleted(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
