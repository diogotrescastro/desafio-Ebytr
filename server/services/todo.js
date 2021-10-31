const todoModel = require('../models/todo');

const create = async () => {
  const newTodo = await todoModel.create();

 return newTodo;
};

const getAll = async () => {
  const todos = await todoModel.getAll();

 return todos;
};


const update = async (id, updateRecipe) => {
  const todo = await todoModel.update();

 return todo;
};

const del = async (id) => {
  const todo = await todoModel.del();

 return todo;
};


module.exports = {
  create,
  getAll,
  update,
  del,
};