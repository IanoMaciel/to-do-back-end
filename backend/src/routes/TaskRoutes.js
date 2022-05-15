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
router.get('/filter/all', MacAddressValidation, TaskController.listAll); //rota para listar todas as tarefas
router.get('/filter/late', MacAddressValidation, TaskController.late); // rota para listar todas as tarefas atrasadas
router.get('/filter/today', MacAddressValidation, TaskController.today); // rota para listar todas as tarefas de hoje "Today"
router.get('/filter/today', MacAddressValidation, TaskController.week); // rota para listar todas as tarefas da semana "Week"


module.exports = router;