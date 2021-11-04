const sinon = require('sinon');
const { expect } = require('chai');

const TodoModel = require('../models/todo');
const TodoService = require('../services/todo');

describe('(SERVICE) Atualiza uma tarefa no BD', () => {
  let connectionMock;
  const payload =  { message: 'Tarefa atualizada com sucesso'};
  const todo = {
    "_id": "61828a110e8fb5affc1d4e58",
    "title": "a",
    "status": "pending",
    "edit": false
  }

 describe('quando é atualizada com sucesso', () => {

  before(async () => {
    
    sinon.stub(TodoModel, 'update').resolves(payload);
  });

  after(() => {
    TodoModel.update.restore();
  });

  it('retorna um objeto', async () => {
    const response = await TodoService.update(todo);

    expect(response).to.be.a('object');
  });

  it('tal objeto possui a propriedade "message"', async () => {
    const response = await TodoService.update(todo);

    expect(response).to.have.a.property('message');
  });

  it('a propriedade messsage deve conter o texto "Tarefa atualizada com sucesso"', async () => {
    const response = await TodoService.update(todo);

    expect(response.message).to.be.equal('Tarefa atualizada com sucesso');
  });
});

});