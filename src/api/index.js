const express = require('express');

const { errorHandler } = require('../middleware');
// list of models here
const { Question } = require('../models/question');
const { Answer } = require('../models/answer');
const { Vote } = require('../models/vote');
const { User } = require('../models/user');

// list of controllers here
const questions = require('../controllers/questions');
const answers = require('../controllers/answers');
const votes = require('../controllers/votes');
const users = require('../controllers/users');
const auth = require('../controllers/auth');

// combine models ino one object
const models = { Question, User, Answer, Vote };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/questions', questions(models, { config }));
  router.use('/answers', answers(models, { config }));
  router.use('/votes', votes(models, { config }));
  router.use('/users', users(models, { config }));
  router.use('/auth', auth(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
