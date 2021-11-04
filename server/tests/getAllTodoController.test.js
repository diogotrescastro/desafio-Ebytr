const sinon = require("sinon");
const { expect } = require("chai");

const TodoController = require("../controllers/todo");
const TodoService = require('../services/todo');

describe("(Controller) Recebe o array de tarefas do BD", () => {

  describe("quando recebe com sucesso", () => {
    const response = {};
    const _request = {};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    it('é chamado o status com o código 200', async () => {
      await TodoController.getAll(_request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});
