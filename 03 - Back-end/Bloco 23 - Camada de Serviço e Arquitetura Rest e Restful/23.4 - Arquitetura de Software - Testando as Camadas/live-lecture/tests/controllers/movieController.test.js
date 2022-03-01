const sinon = require("sinon");
const { expect } = require("chai");

const MoviesService = require("../../services/movieService");
const MoviesController = require("../../controllers/movieController");

describe("Ao chamar o controller de create", () => {
  describe("quando o payload informado não é válido", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, "create").resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it("é chamado o status com o código 400", async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith("Dados inválidos")).to.be.equal(true);
    });
  });

  describe("quando é inserido com sucesso", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: "Example Movie",
        directedBy: "Jane Dow",
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, "create").resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it("é chamado o status com o código 201", async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith("Filme criado com sucesso!")).to.be.equal(
        true
      );
    });
  });

  describe("quando há um erro no serviço", async () => {
    const response = {};
    const request = {};
    let next;

    const err = Error('erro no serviço');

    before(() => {
      request.body = {};

      next = sinon.stub();
      sinon.stub(MoviesService, "create").throws(err);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it("next é chamado passando o erro como parametro", async () => {
      await MoviesController.create(request, response, next);

      sinon.assert.calledWith(next, sinon.match(err));
    });
  });
});

describe('Ao chamar o controller list', () => {
  //arrange
  let request = {}, response = {}, next = {};
  describe('Quando o serviço retorna um array de filmes', () => {

    before(() => {
      //arrange
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(MoviesService, 'list').resolves([]);
    });

    after(() => {
      MoviesService.list.restore();
    });
    
    it('responde a requisição com status 200', async () => {
      await MoviesController.list(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('res.json() é chamado passando um array', async () => {
      await MoviesController.list(request, response, next);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Quando ocorre um erro no serviço', () => {
    const err = Error('erro no serviço');
    before(() => {
      //arrange
      next = sinon.stub();
      sinon.stub(MoviesService, 'list').throws(err);
    });

    after(() => {
      MoviesService.list.restore();
    });
    
    it('o erro é passado para o próximo handler de erro na lista de handlers', async () => {
      await MoviesController.list(request, response, next);

      expect(next.calledWith(sinon.match(err))).to.be.equal(true);
      // sinon.assert.calledWith(next, sinon.match(err));
    });
  });
});