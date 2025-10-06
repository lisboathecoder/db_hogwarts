// src/routes/bruxoRoutes.js
const express = require('express');
const router = express.Router();
const BruxoController = require('../controllers/bruxoController');

router.get('/', BruxoController.listarTodos);
router.get('/:id', BruxoController.buscarPorId);
router.post('/', BruxoController.criar);
router.put('/:id', BruxoController.atualizar);
router.delete('/:id', BruxoController.deletar);

module.exports = router;