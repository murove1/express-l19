const { sendOne } = require('../../middleware');

const get = ({ Answer }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const answer = await Answer.findOne({ _id });

    return sendOne(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
