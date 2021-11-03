const { ObjectId } = require('mongodb');
const getConnection = require('./connection');

const COLLECTION = 'lista-de-tarefas';

const create = async (document) => {
  try {
    const db = await getConnection();
    const newTodo = await db.collection(COLLECTION)
    .insertOne(document);
    const { insertedId } = newTodo;
    const { status, title, edit} = document;
    return { _id: insertedId,title, status, edit };
  } catch (error) {
    return error.message;
  }
};

const getAll = async () => {
  try {
    const db = await getConnection();
    const todos = await db.collection(COLLECTION).find().toArray();
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
    return document;
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
  update,
  del,
}; 