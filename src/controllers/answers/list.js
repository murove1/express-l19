const _ = require('lodash');
const { sendList } = require('../../middleware');

const list = ({ Answer }, { config }) => async (req, res, next) => {
  let { limit, skip, search } = req.query;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const query = {};
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    const answers = await Answer.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });

    return sendList(res, { answers });
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
