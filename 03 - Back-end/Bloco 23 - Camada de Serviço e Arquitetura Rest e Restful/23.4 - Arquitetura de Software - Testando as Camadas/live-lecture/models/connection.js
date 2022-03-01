const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '172.17.0.2',
  user: 'root',
  password: 'pass',
  database: 'movies-api',
});

module.exports = connection;
