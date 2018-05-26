const { sendList } = require('../../middleware');

const answers = ({ Answer }, { config }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    let { limit, skip } = req.query;
    skip = skip ? parseInt(skip, 10) : 0;
    limit = limit ? parseInt(limit, 10) : 100;

    const query = { questionId: _id };

    const count = await Answer.find(query).count();
    const questions = await Answer.find(query)
      .skip(skip)
      .limit(limit);

    return sendList(res, { answers, count });
  } catch (error) {
    next(error);
  }
};

module.exports = { answers };
