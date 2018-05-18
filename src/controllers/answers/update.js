const _ = require('lodash');
const { sendUpdated } = require('../../middleware');

const update = ({ Answer }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const answer = await Answer.findOne({ _id });
    _.extend(answer, req.body);
    await answer.save();

    return sendUpdated(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
