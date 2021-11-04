const sinon = require("sinon");
const { expect } = require("chai");

const TodoController = require("../controllers/todo");

describe("(Controller) Atualiza um tarefa no BD", () => {
  const payload = { message: "Tarefa atualizada com sucesso" };
  const todo = {
    "_id": "61828a110e8fb5affc1d4e58",
    "title": "a",
    "status": "pending",
    "edit": false
  };

  describe("quando é atualizada com sucesso", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = todo;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    it('é chamado o status com o código 200', async () => {
      await TodoController.update(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it("retorna uma mensagem 'Tarefa atualizada com sucesso'", async () => {
      await TodoController.create(request, response);
      expect(response.json.calledWith({ message: 'Tarefa atualizada com sucesso' })).to.be.equal(true);
    });
  });
});
