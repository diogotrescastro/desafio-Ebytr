const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo')

router.post('/adicionar',todoController.create);
router.get('/listar', todoController.getAll);
router.put('/atualizar', todoController.update);
router.delete('/deletar', todoController.del);

module.exports = router; 