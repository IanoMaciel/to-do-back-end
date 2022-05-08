const express = require('express');
const router = express.Router(); 

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');
const MacAddressValidation = require('../middleware/MacAddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show); // rota para listar apenas uma tarefa
router.delete('/:id', TaskController.delete); // rota para deletar uma única tarefa por vez
router.put('/:id/:done', TaskController.done); // atualizar os status da tarefa
router.get('/filter/all', MacAddressValidation, TaskController.listAll ); //rota para listar todas as tarefas

module.exports = router;