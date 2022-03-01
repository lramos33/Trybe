const Song = require('../model/song');
const Artist = require('../model/artist');

const create = async (song) => {
  const { name, album, artist } = song;
  
  const newArtist = await Artist.create({
    name: artist.name,
    genre: artist.genre,
  });
  const artistId = newArtist.id;

  const newSong = await Song.create({
    name,
    album,
    artistId,
  });

  return newSong;
}

module.exports = {
  create,
}