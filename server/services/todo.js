const todoModel = require('../models/todo');

const create = async (document) => {
  const newTodo = await todoModel.create(document);

 return newTodo;
};

const getAll = async () => {
  const todos = await todoModel.getAll();

 return todos;
};


const update = async (document) => {
  const todo = await todoModel.update(document);

 return todo;
};

const del = async (document) => {
  const todo = await todoModel.del(document);

 return todo;
};


module.exports = {
  create,
  getAll,
  update,
  del,
};