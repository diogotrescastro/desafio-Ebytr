const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");
const server = require("../api/app");

chai.use(chaiHttp);

const { expect } = chai;

describe("POST /todo/add", () => {
  describe("Quando uma tarefa é criada com sucesso", () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, "connect").resolves(connectionMock);

      response = await chai.request(server).post("/todo/add").send({
        title: "titulo da tarefa",
        status: "pending",
        edit: false,
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it("retorna o código de status 201", () => {
      expect(response).to.have.status(201);
    });

    it("retorna um objeto", () => {
      expect(response.body).to.be.a("object");
    });

    it('o objeto possui as propriedades "message"', () => {
      expect(response.body).to.have.property("message");
    });
    it('a propriedade "message" possui o texto "Tarefa criada com sucesso"', () => {
      expect(response.body.message).to.be.equal(
        "Tarefa criada com sucesso"
      );
    });
  });
  describe("Quando uma tarefa é criada sem sucesso", () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, "connect").resolves(connectionMock);

      response = await chai.request(server).post("/todo/add").send({
        title: "titulo da tarefa",
        status: "pending",
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it("retorna o código de status 401", () => {
      expect(response).to.have.status(401);
    });

    it("retorna um objeto", () => {
      expect(response.body).to.be.a("object");
    });

    it('o objeto possui as propriedades "message"', () => {
      expect(response.body).to.have.property("message");
    });
    it('a propriedade "message" possui o texto "Ocorreu um erro: Faltou algo em sua requisição"', () => {
      expect(response.body.message).to.be.equal(
        "Ocorreu um erro: Faltou algo em sua requisição"
      );
    });
  });
});
