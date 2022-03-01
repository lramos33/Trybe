const connection = require('./connection');

const create = async (song) => {
  const [ results ] = await connection.execute(`
    INSERT INTO 
      music.songs(name, album, artist_id)
    VALUES
      (?, ?, ?)`,
    [ song.name, song.album, song.artistId ],
  );

  return {
    // insertID é do próprio mysql
    id: results.insertId,
    ...song,
  }
}


module.exports = {
  create,
}