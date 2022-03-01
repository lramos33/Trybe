const MoviesService = require("../services/movieService");

const create = async (req, res, next) => {
  try {
    const { title, directedBy, releaseYear } = req.body;
  
    const movie = await MoviesService.create({ title, directedBy, releaseYear });
  
    if (!movie) {
      return res.status(400).send("Dados inválidos");
    }
  
    res.status(201).send("Filme criado com sucesso!");
  } catch (e) {
    next(e);
  }
};

const list = async (req, res, next) => {
  try {
    const movies = await MoviesService.list();

    return res.status(200).json(movies);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  create,
  list,
};
