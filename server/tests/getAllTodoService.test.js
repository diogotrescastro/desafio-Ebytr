const sinon = require('sinon');
const { expect } = require('chai');

const TodoModel = require('../models/todo');
const TodoService = require('../services/todo');

describe('(SERVICE) Retorna o array de tarefas', () => {
  const payload = [
    {
      _id: '6182df779e6fafe66a11c5dc',
      title: 'service',
      status: 'completed',
      edit: true,
      date: '2021-11-03T19:13:59.375Z',
    },
    {
      _id: '6182df779e6fafe66a11c4dc',
      title: 'b',
      status: 'pending',
      edit: false,
      date: '2021-10-03T19:13:59.375Z',
    },
  ];

  describe('quando retorna com sucesso', () => {
    before(async () => {
      sinon.stub(TodoModel, 'getAll').resolves(payload);
    });

    after(() => {
      TodoModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await TodoService.getAll(payload);

      expect(response).to.be.an('array');
    });

    it('tal array possui dois objetos', async () => {
      const response = await TodoService.getAll(payload);

      expect(response.length).to.be.equal(2);
    });

    it('o primeiro objeto do array possui as propriedades"_id, title, status, edit, date"', async () => {
      const response = await TodoService.getAll(payload);
      expect(response[0]).to.have.property('_id');
      expect(response[0]).to.have.property('title');
      expect(response[0]).to.have.property('status');
      expect(response[0]).to.have.property('edit');
      expect(response[0]).to.have.property('date');
    });

    it('o segundo objeto do array possui as propriedades"_id, title, status, edit, date"', async () => {
      const response = await TodoService.getAll(payload);
      expect(response[0]).to.have.property('_id');
      expect(response[0]).to.have.property('title');
      expect(response[0]).to.have.property('status');
      expect(response[0]).to.have.property('edit');
      expect(response[0]).to.have.property('date');
    });
  });
});
