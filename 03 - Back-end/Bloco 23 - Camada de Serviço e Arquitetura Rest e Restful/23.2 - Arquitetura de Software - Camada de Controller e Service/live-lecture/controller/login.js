const { StatusCodes } = require("http-status-codes");
const authService = require('../service/auth');

const login = (req, res, next) => {
  try {
    const { username, password } = req.body;

    // TODO: VALIDAR username E password
    if (!username || !password) {
      return res.status(StatusCodes.UNAUTHORIZED).send({message: "não informou username e password"});
    }

    const token = authService.genToken();

    res.status(StatusCodes.OK).json({ token })
  } catch (e) {
    next(e);
  }
}

module.exports = {
  login,
}