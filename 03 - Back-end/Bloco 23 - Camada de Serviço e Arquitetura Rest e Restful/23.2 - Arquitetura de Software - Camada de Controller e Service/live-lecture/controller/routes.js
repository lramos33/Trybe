const express = require('express');
const songController = require('./song');
const loginController = require('./login');

const songRouter = express.Router();
const loginRouter = express.Router();

songRouter.post('/', songController.create);
loginRouter.post('/', loginController.login);

module.exports = {
  songRouter,
  loginRouter,
}