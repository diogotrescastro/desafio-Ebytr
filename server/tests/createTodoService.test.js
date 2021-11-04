const sinon = require('sinon');
const { expect } = require('chai');

const TodoModel = require('../models/todo');
const TodoService = require('../services/todo');

describe('(SERVICE) Insere uma nova tarefa no BD', () => {
  const payload =  { message: 'Tarefa criada com sucesso'};
  const todo = {	
    "title": "service",
   "status": "completed",
   "edit": true
 };

 describe('quando é inserido com sucesso', () => {

  before(async () => {
    
    sinon.stub(TodoModel, 'create').resolves(payload);
  });

  after(() => {
    TodoModel.create.restore();
  });

  it('retorna um objeto', async () => {
    const response = await TodoService.create(todo);

    expect(response).to.be.a('object');
  });

  it('tal objeto possui a propriedade "message"', async () => {
    const response = await TodoService.create(todo);

    expect(response).to.have.a.property('message');
  });

  it('a propriedade messsage deve conter o texto "Tarefa criada com sucesso"', async () => {
    const response = await TodoService.create(todo);

    expect(response.message).to.be.equal('Tarefa criada com sucesso');
  });
});

});