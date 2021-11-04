const sinon = require("sinon");
const { expect } = require("chai");

const TodoController = require("../controllers/todo");

describe("(Controller) Deleta um tarefa no BD", () => {
  const payload = { message: "Tarefa deletada com sucesso" };
  const todo = {
    "_id": "61828a110e8fb5affc1d4e58",
    "title": "a",
    "status": "pending",
    "edit": false
  };

  describe("quando é deletada com sucesso", () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = todo;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    it('é chamado o status com o código 204', async () => {
      await TodoController.del(request, response);
      expect(response.status.calledWith(204)).to.be.equal(true);
    });

    it("retorna uma mensagem 'Tarefa deletada com sucesso'", async () => {
      await TodoController.create(request, response);
      expect(response.json.calledWith({ message: 'Tarefa deletada com sucesso' })).to.be.equal(true);
    });
  });
});
