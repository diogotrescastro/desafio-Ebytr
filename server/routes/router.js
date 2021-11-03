const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo')
const { validate, validateWithID } = require('../middlewares/validations')

router.post('/add',validate, todoController.create);
router.get('/list', todoController.getAll);
router.get('/list/sortedbyrecents', todoController.getAllSortedByRecents);
router.get('/list/sortedbyolds', todoController.getAllSortedByOlds);
router.get('/list/sortedbyaz', todoController.getAllSortedByAz);
router.get('/list/sortedbyaz', todoController.getAllSortedByZa);
router.put('/update',validateWithID, todoController.update);
router.delete('/delete',validateWithID, todoController.del);

module.exports = router; 