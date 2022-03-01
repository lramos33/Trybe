const connection = require('./connection');

const create = async (artist) => {
  const [ results ] = await connection.execute(`
    INSERT INTO 
      music.artists(name, genre)
    VALUES
      (?, ?)`,
    [ artist.name, artist.genre ],
  );

  return {
    id: results.insertId,
    ...artist,
  }
}

module.exports = {
  create,
}