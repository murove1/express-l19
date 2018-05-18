const { sendList } = require('../../middleware');

const answers = ({ Answer }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  let { limit, skip } = req.query;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const answers = await Answer.find({ questionId: _id })
      .skip(skip)
      .limit(limit);

    return sendList(res, { answers });
  } catch (error) {
    next(error);
  }
};

module.exports = { answers };
