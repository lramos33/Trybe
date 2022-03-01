const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '172.17.0.2',
  port: 3306,
  user: 'root',
  password: 'pass',
  database: 'music',
});

module.exports = connection;