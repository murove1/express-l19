const _ = require('lodash');
const { sendDeleted } = require('../../middleware');

const remove = ({ Vote }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const vote = await Vote.findOne({ _id });
    await Vote.remove({ _id });

    return sendDeleted(res, { vote });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
