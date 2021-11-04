const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../models/connection');
const TodoModel = require('../models/todo');
const DB_NAME = 'tarefas';

describe('(MODEL)Insere uma nova tarefa no BD', () => {
  let connectionMock;
  const payload = {
    title: 'model',
    status: 'completed',
    edit: true,
  };

  describe('quando é inserido com sucesso', () => {
    before(async () => {
      const DBServer = new MongoMemoryServer();
      const URLMock = await DBServer.getUri();
      connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((conn) => conn.db(DB_NAME));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

    after(() => {
      mongoConnection.getConnection.restore();
    });

    it('retorna um objeto', async () => {
      const response = await TodoModel.create(payload);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', async () => {
      const response = await TodoModel.create(payload);

      expect(response).to.have.a.property('message');
    });

    it('a propriedade messsage deve conter o texto "Tarefa criada com sucesso"', async () => {
      const response = await TodoModel.create(payload);

      expect(response.message).to.be.equal('Tarefa criada com sucesso');
    });
  });
});
