const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../models/connection');
const TodoModel = require('../models/todo');
const DB_NAME = 'tarefasMock';

describe('(MODEL) Retorna o array de tarefas', () => {
  let connectionMock;
  const payload =  {	
  "title": "test",
  "status": "completed",
  "edit": true
 }

  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((conn) => conn.db(DB_NAME));

    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('quando retorna com sucesso', () => {

    it('retorna um array', async () => {
      await TodoModel.create(payload);
      const response = await TodoModel.getAll(payload);

      expect(response).to.be.an('array');
    });

    it('tal array possui um objeto com os dados da tarefa', async () => {
      const response = await TodoModel.getAll(payload);
      expect(response[0]).to.be.a("object");
    });

    it('tal array possui um objeto com as propriedades "_id, title, status, edit, date"', async () => {
      const response = await TodoModel.getAll(payload);
      expect(response[0]).to.have.property('_id');
      expect(response[0]).to.have.property('title');
      expect(response[0]).to.have.property('status');
      expect(response[0]).to.have.property('edit');
      expect(response[0]).to.have.property('date');
    });

  });

});