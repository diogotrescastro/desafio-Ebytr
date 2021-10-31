const { ObjectId } = require('mongodb');
const getConnection = require('./connection');

const COLLECTION = 'lista-de-tarefas';

const create = async () => {
  try {
    const db = await getConnection();
    const newTodo = await db.collection(COLLECTION)
    .insertOne({});
    return newTodo;
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

const update = async () => {
  try {
    const db = await getConnection();
    const todoUpdated = db.collection(COLLECTION)
    .updateOne({ _id: ObjectId(id) }, { $set: { ...updateRecipe } });
    return todoUpdated;
  } catch (error) {
    return error.message;
  }
};

const del = async (id) => {
  try {
    const db = await getConnection();
    await db.collection(COLLECTION)
    .deleteOne({ _id: ObjectId(id) });
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