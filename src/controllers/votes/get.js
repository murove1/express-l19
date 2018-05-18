const { sendOne } = require('../../middleware');

const get = ({ Vote }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const vote = await Vote.findOne({ _id });

    return sendOne(res, { vote });
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
