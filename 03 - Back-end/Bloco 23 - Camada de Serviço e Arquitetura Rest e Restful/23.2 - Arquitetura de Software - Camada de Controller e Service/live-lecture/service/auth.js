const SECRET = "segredo";

const genToken = (user) => SECRET

const isTokenValid = (token) => token && token === SECRET

module.exports = {
  genToken,
  isTokenValid,
}