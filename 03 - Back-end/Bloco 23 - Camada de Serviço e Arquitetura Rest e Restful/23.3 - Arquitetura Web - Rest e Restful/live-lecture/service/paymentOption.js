const PaymentOption = require('../model/paymentOption');

// Na vida real vai envolver chamada de API externa para checar os dados do cartão de crédito
const validate = (paymentOption) => {
  return (
    paymentOption.credit_card.replaceAll('-','').length === 16
    && (paymentOption.security_code.length === 4 || paymentOption.security_code.length === 3)
  );
}

const create = async (paymentOption) => {
  if (!validate(paymentOption)) {
    return { err: 'Credit card number must have length 16 and security code must have length 3 or 4' };
  }

  const created = await PaymentOption.create(paymentOption);

  return created;
}

const update = async (paymentOption) => {
  if (!validate(paymentOption)) {
    return { 
      err: {
        code: 'MALFORMED_FIELDS',
        msg: 'Credit card number must have length 16 and security code must have length 3 or 4',
      },
    };
  }

  const updated = await PaymentOption.update(paymentOption);

  if (!updated) {
    return {
      err: {
        code: 'ID_NOT_FOUND',
        msg: 'Id not found',
      },
    }
  }

  return updated;
}

module.exports = {
  create,
  update,
}