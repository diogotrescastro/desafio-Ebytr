const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

const COLLECTION = 'lista';

const create = async (document) => {
  try {
    if (!document) return error;
    const {title, status, edit} = document;
    const date = new Date()
    const db = await mongoConnection.getConnection();
    await db.collection(COLLECTION)
    .insertOne({title, status, edit, date});
    return { message: 'Tarefa criada com sucesso'};
  } catch (error) {
    return error.message;
  }
};

const getAll = async () => {
  try {
    const db = await mongoConnection.getConnection();
    const todos = await db.collection(COLLECTION).find().toArray();
    return todos;
  } catch (error) {
    return error.message;
  }
};

const update = async (document) => {
  try {
    if (!document) return error;
    const id = document._id;
    const {title, status, edit} = document;
    const db = await mongoConnection.getConnection();
    await db.collection(COLLECTION)
    .updateOne({ _id: ObjectId(id) }, { $set: {title, status, edit} });
    return { message: 'Tarefa atualizada com sucesso'};
  } catch (error) {
    return error.message;
  }
};

const del = async (document) => {
  try {
    if (!document) return error;
    const db = await mongoConnection.getConnection();
    await db.collection(COLLECTION)
    .deleteOne({ _id: ObjectId(document._id) });
    return { message: 'Tarefa deletada com sucesso'};
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  update,
  del,
}; 