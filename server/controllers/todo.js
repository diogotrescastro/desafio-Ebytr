const todoService = require('../services/todo');

const create = async (req, res) => {
  try {
    const { } = req.body;
    const newTodo = await todoService.create();
    return res.status(201).json(newTodo);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const todos = await todoService.getAll();
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const todoUpdated = await todoService.update(id, req.body);
    return res.status(200).json(todoUpdated);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    await todoService.del(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

module.exports = {
  create,
  getAll,
  update,
  del
}; 