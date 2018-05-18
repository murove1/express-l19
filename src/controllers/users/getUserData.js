const { sendOne } = require('../../middleware');

const getUserData = (req, res) => {
  const user = req.user;

  return sendOne(res, { user });
};

module.exports = { getUserData };
