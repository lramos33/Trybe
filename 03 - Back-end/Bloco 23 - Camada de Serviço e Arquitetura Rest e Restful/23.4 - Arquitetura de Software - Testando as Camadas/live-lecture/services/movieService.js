const MoviesModel = require("../models/movieModel");

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== "string") return false;
  if (!releaseYear || typeof releaseYear !== "number") return false;
  if (!directedBy || typeof directedBy !== "string") return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const list = async () => {
  const movies = await MoviesModel.getAll();

  return movies.map(getMovie);
}

const getMovie = (movie) => {
  return {
    id: movie.id,
    title: movie.title,
    directedBy: movie.directed_by,
    releaseYear: movie.release_year,
  }
}

module.exports = {
  create,
  list,
};
