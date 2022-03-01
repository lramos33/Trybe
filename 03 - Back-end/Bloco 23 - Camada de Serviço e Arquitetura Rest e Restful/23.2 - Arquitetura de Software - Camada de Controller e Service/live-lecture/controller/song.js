const { StatusCodes } = require('http-status-codes');
const songService = require('../service/song');

const create = async (req, res, next) => {
  try {
    const { name, album, artist } = req.body
    
    const created = await songService.create({ name, album, artist })

    return res.status(StatusCodes.OK).json(created);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  create,
}