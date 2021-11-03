const { ObjectId } = require('mongodb');
const getConnection = require('./connection');

const COLLECTION = 'lista-de-tarefas';

const create = async (document) => {
  try {
    const {title, status, edit} = document;
    const date = new Date()
    const db = await getConnection();
    const newTodo = await db.collection(COLLECTION)
    .insertOne({title, status, edit, date});
    return { message: 'Tarefa criada com sucesso'};
  } catch (error) {
    return error.message;
  }
};

const getAll = async () => {
  try {
    const db = await getConnection();
    const todos = await db.collection(COLLECTION).find().sort({ date: -1 }).toArray();
    return todos;
  } catch (error) {
    return error.message;
  }
};

const getAllSortedByRecents = async () => {
  try {
    const db = await getConnection();
    const todos = await db.collection(COLLECTION).find().sort({ date: -1 }).toArray();
    return todos;
  } catch (error) {
    return error.message;
  }
};

const getAllSortedByOlds = async () => {
  try {
    const db = await getConnection();
    const todos = await db.collection(COLLECTION).find().sort({ date: 1 }).toArray();
    return todos;
  } catch (error) {
    return error.message;
  }
};

const update = async (document) => {
  try {
    const id = document._id;
    const {title, status, edit} = document;
    const db = await getConnection();
    const todoUpdated = await db.collection(COLLECTION)
    .updateOne({ _id: ObjectId(id) }, { $set: {title, status, edit} });
    return { message: 'Tarefa atualizada com sucesso'};
  } catch (error) {
    return error.message;
  }
};

const del = async (document) => {
  try {
    const db = await getConnection();
    const todoDeleted = await db.collection(COLLECTION)
    .deleteOne({ _id: ObjectId(document._id) });
    return todoDeleted;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getAll,
  getAllSortedByRecents,
  getAllSortedByOlds,
  update,
  del,
}; 