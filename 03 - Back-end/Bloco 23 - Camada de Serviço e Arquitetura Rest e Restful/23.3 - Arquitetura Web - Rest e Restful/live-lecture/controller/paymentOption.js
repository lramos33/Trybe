const{ StatusCodes } = require('http-status-codes');
const paymentOptionService = require('../service/paymentOption');

const validatePaymentOptionRequest = (req, res, next) => {
  const { 
    user_id,
    credit_card,
    security_code,
    expiration_date
  } = req.body;

  if (!user_id || !credit_card || !security_code || !expiration_date) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Must inform user_id, credit_card, security_code, expiration_date'
    });
  }

  req.paymentOption = {
    user_id,
    credit_card,
    security_code,
    expiration_date
  };

  next();
}

const create = async (req, res, next) => {
  try {
    const created = await paymentOptionService.create(req.paymentOption);

    if (created.err) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: created.err.message });
    }

    return res.status(StatusCodes.CREATED).json(created);
  } catch (e) {
    next(e);
  }
}

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await paymentOptionService.update({
      id,
      ...req.paymentOption,
    });

    if (updated.err) {
      return errorResponse(updated.err, res);
    }

    return res.status(StatusCodes.OK).json(updated);
  } catch (e) {
    next(e);
  }
}

const errorResponse = (err, res) => {
  switch (err.code) {
    case 'MALFORMED_FIELDS':
      res.status(StatusCodes.UNPROCESSABLE_ENTITY);    
      break;
    case 'ID_NOT_FOUND':
      res.status(StatusCodes.NOT_FOUND);    
      break;
    default:
      res.status(StatusCodes.BAD_REQUEST);
      break;
  }

  return res.json({ message: err.msg });
}

module.exports = {
  create,
  update,
  validatePaymentOptionRequest,
}