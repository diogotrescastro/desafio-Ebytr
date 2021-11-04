const sinon = require('sinon');
const { expect } = require('chai');

const TodoController = require('../controllers/todo');
const TodoService = require('../services/todo');

describe('(Controller) Atualiza um tarefa no BD', () => {
  const todo = {
    _id: '61828a110e8fb5affc1d4e58',
    title: 'controller',
    status: 'pending',
    edit: false,
  };

  describe('quando é atualizada com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = todo;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(TodoService, 'update')
        .resolves({ message: 'Tarefa atualizada com sucesso' });
    });

    after(() => {
      TodoService.update.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await TodoController.update(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna uma mensagem "Tarefa atualizada com sucesso"', async () => {
      await TodoController.update(request, response);
      expect(
        response.json.calledWith({ message: 'Tarefa atualizada com sucesso' })
      ).to.be.equal(true);
    });
  });
  describe('quando é inserido sem sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = null;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(TodoService, 'update')
        .resolves({ message: 'Tarefa atualizada com sucesso' });
    });

    after(() => {
      TodoService.update.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await TodoController.update(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });
});
