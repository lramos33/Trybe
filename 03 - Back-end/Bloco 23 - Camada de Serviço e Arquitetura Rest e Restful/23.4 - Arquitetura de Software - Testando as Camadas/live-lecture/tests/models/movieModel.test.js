const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../models/connection");
const MoviesModel = require("../../models/movieModel");

describe("Insere um novo filme no BD", () => {
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, "execute").resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe("quando é inserido com sucesso", async () => {
    it("retorna um objeto", async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property("id");
    });
  });
});

describe('Lista todos os filmes do BD', () => {
  describe('Quando não existem filmes no BD', () => {
    before(() => {
      const result = [[], []];

      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array vazio', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
      expect(movies).to.be.empty;
    });
  });

  describe('Quando existem filmes no BD', () => {
    before(() => {
      const movie = {
        id: 1,
        title: 'Avatar',
        directed_by: 'James Cameron',
        release_year: 2009,
      }

      const result = [[movie], []];

      sinon.stub(connection, 'execute').resolves(result);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array de objetos', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
      expect(movies).not.to.be.empty;
      movies.forEach(m => expect(m).to.be.an('object'));
    });

    it('cada objeto no array deve ter as chaves id, title, directed_by, release_year', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).not.to.be.empty;
      movies.forEach(m => expect(m).to.include.all.keys('id', 'title', 'directed_by', 'release_year'));
    });
  });
});
