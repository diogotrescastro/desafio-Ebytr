const sinon = require("sinon");
const { expect } = require("chai");

const TodoController = require("../controllers/todo");
const TodoService = require("../services/todo");

describe("(Controller) Insere uma nova tarefa no BD", () => {
  const todo = {
    title: "controller",
    status: "pending",
    edit: false,
  };

  describe("quando é inserido com sucesso", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = todo;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TodoService, 'create').resolves({ message: 'Tarefa criada com sucesso'});
    });

    after(() => {
      TodoService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await TodoController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it("retorna uma mensagem 'Tarefa criada com sucesso'", async () => {
      await TodoController.create(request, response);
      expect(response.json.calledWith({ message: 'Tarefa criada com sucesso' })).to.be.equal(true);
    });
  });
  describe("quando é inserido sem sucesso", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = null;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TodoService, 'create').resolves(null);
    });

    after(() => {
      TodoService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await TodoController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });
});
