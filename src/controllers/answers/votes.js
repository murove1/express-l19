const { sendList } = require('../../middleware');

const votes = ({ Vote }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  let { limit, skip } = req.query;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const votes = await Vote.find({ answerId: _id })
      .skip(skip)
      .limit(limit);

    return sendList(res, { votes });
  } catch (error) {
    next(error);
  }
};

module.exports = { votes };
