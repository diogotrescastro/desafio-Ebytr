const sinon = require('sinon');
const { expect } = require('chai');

const TodoModel = require('../models/todo');
const TodoService = require('../services/todo');

describe('(SERVICE) Deleta uma nova tarefa no BD', () => {
  const payload = { message: 'Tarefa deletada com sucesso' };
  const todo = {
    _id: '61828a110e8fb5affc1d4e58',
    title: 'service',
    status: 'pending',
    edit: false,
  };

  describe('quando é deletada com sucesso', () => {
    before(async () => {
      sinon.stub(TodoModel, 'del').resolves(payload);
    });

    after(() => {
      TodoModel.del.restore();
    });

    it('retorna um objeto', async () => {
      const response = await TodoService.del(todo);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', async () => {
      const response = await TodoService.del(todo);

      expect(response).to.have.a.property('message');
    });

    it('a propriedade messsage deve conter o texto "Tarefa deletada com sucesso"', async () => {
      const response = await TodoService.del(todo);

      expect(response.message).to.be.equal('Tarefa deletada com sucesso');
    });
  });
});
