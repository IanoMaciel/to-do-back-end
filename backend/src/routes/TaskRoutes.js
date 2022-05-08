const express = require('express');
const router = express.Router(); 

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middleware/TaskValidation');
const MacAddressValidation = require('../middleware/MacAddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/filter/all', MacAddressValidation, TaskController.listAll );

module.exports = router;