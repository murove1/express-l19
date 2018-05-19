const { errorHandler } = require('./error-handller');
const { authenticate, generateAccessToken } = require('./auth');
const {
  sendOne,
  sendList,
  sendCreated,
  sendAccepted,
  sendUpdated,
  sendDeleted
} = require('./requests-helpers');

module.exports = {
  errorHandler,
  sendOne,
  sendList,
  sendCreated,
  sendAccepted,
  sendUpdated,
  sendDeleted,
  authenticate,
  generateAccessToken
};
