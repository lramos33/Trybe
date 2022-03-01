const { StatusCodes } = require('http-status-codes');
const authService = require('../service/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authService.isTokenValid(authorization)) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'wrong token or token not informed'});
    }

    next();
  } catch (e) {
    next(e);
  }
}