const { sendOne } = require('../../middleware');

const getUserData = ({ User }, { config }) => async (req, res, next) => {
  const { id } = req.user;

  try {
    const user = await User.findOne({ _id: id });

    return sendOne(res, { user });
  } catch (error) {
    next(error);
  }
};
module.exports = { getUserData };
