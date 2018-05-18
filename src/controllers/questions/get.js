const { sendOne } = require('../../middleware');

const get = ({ Question }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const question = await Question.findOne({ _id });

    return sendOne(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
