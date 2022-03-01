const express = require('express');
const paymentOptionController = require('./paymentOption');

const paymentOptionRouter = express.Router();

paymentOptionRouter.post(
  '/',
  paymentOptionController.validatePaymentOptionRequest,
  paymentOptionController.create,
);

paymentOptionRouter.put(
  '/:id',
  paymentOptionController.validatePaymentOptionRequest,
  paymentOptionController.update,
)

module.exports = {
  paymentOptionRouter,
}