const express = require('express');
const router = express.Router();
const { getAllTask, createTask, updateTask, deleteTask } = require('../controller/Controller');
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;