const _ = require('lodash');
const { sendUpdated } = require('../../middleware');

const update = ({ Vote }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const vote = await Vote.findOne({ _id });
    _.extend(vote, req.body);
    await vote.save();

    return sendUpdated(res, { vote });
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
