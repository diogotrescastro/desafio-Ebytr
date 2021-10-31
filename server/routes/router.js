const express = require('express');
const router = express.Router();

router.post('/adicionar');
router.get('/listar');
router.put('/atualizar');
router.delete('/deletar');

module.exports = router; 