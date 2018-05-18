const { sendOne } = require('../../middleware');

const get = ({ User }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const user = await User.findOne({ _id });
    
    return sendOne(res, { user });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
