const sinon = require("sinon");
const { expect } = require("chai");

const TodoController = require("../controllers/todo");

describe("(Controller) Insere uma nova tarefa no BD", () => {
  const todo = {
    title: "a",
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
});
