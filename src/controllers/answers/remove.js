const _ = require('lodash');
const { sendDeleted } = require('../../middleware');

const remove = ({ Answer }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const answer = await Answer.findOne({ _id });
    await Answer.remove({ _id });

    return sendDeleted(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
