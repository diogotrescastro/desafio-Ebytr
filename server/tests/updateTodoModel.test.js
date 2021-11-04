const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../models/connection');
const TodoModel = require('../models/todo');
const DB_NAME = 'tarefasMock';

describe('Atualiza com sucesso uma nova tarefa no BD', () => {
  let connectionMock;
  const payload =  {	
    "_id": "6182df779e6fafe66a11c5dc",
    "title": "a",
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

  describe('quando é atualizado com sucesso', () => {

    it('retorna um objeto', async () => {
      await TodoModel.create({	
        "title": "a",
       "status": "completed",
       "edit": true
     });
      const response = await TodoModel.update(payload);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', async () => {
      const response = await TodoModel.update(payload);

      expect(response).to.have.a.property('message');
    });

    it('a propriedade messsage deve conter o texto "Tarefa atualizada com sucesso"', async () => {
      const response = await TodoModel.update(payload);

      expect(response.message).to.be.equal('Tarefa atualizada com sucesso');
    });
  });

});