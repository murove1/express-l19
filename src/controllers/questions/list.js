const _ = require('lodash');
const { sendList } = require('../../middleware');

const list = ({ Question }, { config }) => async (req, res, next) => {
  let { limit, skip, search, sort } = req.query;
  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const query = {};
    const sortQuery = sort || { _id: -1 };

    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }

    const count = await Question.find(query).count();
    const questions = await Question.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortQuery);

    return sendList(res, { questions, count });
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
