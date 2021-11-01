const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo')

router.post('/add',todoController.create);
router.get('/list', todoController.getAll);
router.put('/update', todoController.update);
router.delete('/delete', todoController.del);

module.exports = router; 