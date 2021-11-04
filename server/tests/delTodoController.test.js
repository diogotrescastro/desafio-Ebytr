const sinon = require('sinon');
const { expect } = require('chai');

const TodoController = require('../controllers/todo');
const TodoService = require('../services/todo');

describe('(Controller) Deleta um tarefa no BD', () => {
  const todo = {
    _id: '61828a110e8fb5affc1d4e58',
    title: 'controller',
    status: 'pending',
    edit: false,
  };

  describe('quando é deletada com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = todo;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(TodoService, 'del')
        .resolves({ message: 'Tarefa deletada com sucesso' });
    });

    after(() => {
      TodoService.del.restore();
    });

    it('é chamado o status com o código 204', async () => {
      await TodoController.del(request, response);
      expect(response.status.calledWith(204)).to.be.equal(true);
    });

    it('retorna uma mensagem "Tarefa deletada com sucesso"', async () => {
      await TodoController.del(request, response);
      expect(
        response.json.calledWith({ message: 'Tarefa deletada com sucesso' })
      ).to.be.equal(true);
    });
  });

  describe('quando é deletado sem sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = null;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(TodoService, 'del').resolves(null);
    });

    after(() => {
      TodoService.del.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await TodoController.del(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });
});
