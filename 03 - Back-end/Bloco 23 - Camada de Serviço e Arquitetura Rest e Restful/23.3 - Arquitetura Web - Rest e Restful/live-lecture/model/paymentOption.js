const { v4: uuidv4 } = require('uuid');

const connection = require('./connection');

const create = async (paymentOption) => {
  const id = uuidv4();
  const [ result ] = await connection.execute(
    `INSERT INTO
      Ecommerce.payment_option(id, user_id, credit_card, security_code, expiration_date)
    VALUES
      (?, ?, ?, ?, ?)`,
    [id, paymentOption.user_id, paymentOption.credit_card, paymentOption.security_code, paymentOption.expiration_date]
  );

  return {
    id,
    ...paymentOption,
  }
}

const update = async (paymentOption) => {
  const [ result ] = await connection.execute(`
    UPDATE Ecommerce.payment_option
    SET
      user_id = ?,
      credit_card = ?,
      security_code = ?,
      expiration_date = ?
    WHERE
      id = ?`,
    [ paymentOption.user_id, paymentOption.credit_card, paymentOption.security_code, paymentOption.expiration_date, paymentOption.id ]
  );

  if (!result.affectedRows) {
    return null;
  }

  return paymentOption;
}

module.exports = {
  create,
  update,
}