const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo')
const { validate, validateWithID } = require('../middlewares/validations')

router.post('/add',validate, todoController.create);
router.get('/list', todoController.getAll);
router.put('/update',validateWithID, todoController.update);
router.delete('/delete',validateWithID, todoController.del);

module.exports = router; 