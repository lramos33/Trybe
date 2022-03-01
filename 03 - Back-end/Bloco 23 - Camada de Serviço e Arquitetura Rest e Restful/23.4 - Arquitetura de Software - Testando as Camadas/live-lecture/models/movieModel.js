const connection = require("./connection");

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    "INSERT INTO `movies-api`.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
    [title, directedBy, releaseYear]
  );

  return {
    id: result.insertId,
  };
};

const getAll = async () => {
  const [ result ] = await connection.execute(
    "SELECT * FROM `movies-api`.movies;"
  );

  return result;
}

module.exports = {
  create,
  getAll,
};
