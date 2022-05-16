const express = require('express');
const router = express.Router(); 

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show); // rota para listar apenas uma tarefa
router.delete('/:id', TaskController.delete); // rota para deletar uma única tarefa por vez
router.put('/:id/:done', TaskController.done); // atualizar os status da tarefa
router.get('/filter/all/:macaddress', TaskController.listAll); //rota para listar todas as tarefas
router.get('/filter/late/:macaddress', TaskController.late); // rota para listar todas as tarefas atrasadas
router.get('/filter/today/:macaddress', TaskController.today); // rota para listar todas as tarefas de hoje "Today"
router.get('/filter/week/:macaddress', TaskController.week); // rota para listar todas as tarefas da semana "Week"
router.get('/filter/month/:macaddress', TaskController.month); // rota para listar todas as tarefas dos meses "Month"
router.get('/filter/year/:macaddress', TaskController.year); // rota para listar todas as tarefas do ano "Years"


module.exports = router;