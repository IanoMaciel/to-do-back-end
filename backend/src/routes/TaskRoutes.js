const express = require('express');
const router = express.Router(); 

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');

router.post('/', TaskValidation, TaskController.create);

module.exports = router;