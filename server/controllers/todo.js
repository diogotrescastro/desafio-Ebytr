const todoService = require('../services/todo');

const create = async (req, res) => {
  try {
    const document = req.body;
    const newTodo = await todoService.create(document);
    return res.status(201).json(newTodo);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const todos = await todoService.getAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const getAllSortedByRecents  = async (_req, res) => {
  try {
    const todos = await todoService.getAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const getAllSortedByOlds  = async (_req, res) => {
  try {
    const todos = await todoService.getAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const getAllSortedByAz = async (_req, res) => {
  try {
    const todos = await todoService.getAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const getAllSortedByZa = async (_req, res) => {
  try {
    const todos = await todoService.getAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const update = async (req, res) => {
  try {
    const document = req.body;
    const todoUpdated = await todoService.update(document);
    return res.status(200).json(todoUpdated);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const del = async (req, res) => {
  try {
    const document = req.body;
    await todoService.del(document);
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getAllSortedByRecents,
  getAllSortedByOlds,
  getAllSortedByAz,
  getAllSortedByZa,
  update,
  del
}; 