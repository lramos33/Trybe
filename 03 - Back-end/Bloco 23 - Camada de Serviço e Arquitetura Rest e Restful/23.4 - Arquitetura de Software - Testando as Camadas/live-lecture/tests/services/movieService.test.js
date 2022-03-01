const sinon = require("sinon");
const { expect } = require("chai");

const MoviesModel = require("../../models/movieModel");
const MoviesService = require("../../services/movieService");

describe("Insere um novo filme no BD", () => {
  describe("quando o payload informado não é válido", async () => {
    const payloadMovie = {};

    it("retorna um boolean", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("boolean");
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe("quando é inserido com sucesso", async () => {
    const payloadMovie = {
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, "create").resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property("id");
    });
  });
});

describe('Lista todos os filmes do BD', () => {
  describe('Quando não existem filmes cadastrados', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll').resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('o retorno é um array vazio', async () => {
      const movies = await MoviesService.list();

      expect(movies).to.be.an('array');
      expect(movies).to.be.empty;
    });
  });

  describe('Quando existem filmes cadastrados', () => {
    before(() => {
      const movie = {
        id: 1,
        title: 'Avatar',
        directed_by: 'James Cameron',
        release_year: 2009,
      };

      sinon.stub(MoviesModel, 'getAll').resolves([ movie ]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array de objetos', async () => {
      const movies = await MoviesService.list();

      expect(movies).to.be.an('array');
      expect(movies).not.to.be.empty;
      movies.forEach(m => expect(m).to.be.an('object'));
    });

    it('cada objeto no array deve ter as chaves id, title, directedBy, releaseYear', async () => {
      const movies = await MoviesService.list();

      expect(movies).not.to.be.empty;
      movies.forEach(m => expect(m).to.include.all.keys('id', 'title', 'directedBy', 'releaseYear'));
    });
  });
});