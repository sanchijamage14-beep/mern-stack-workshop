const Task = require('../modals/Task');

//Create a Task 
exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: "title is required" });
    }
    const task = await Task.create({ title, description });
    res.status(201).json(task);
}
//Get all Tasks
exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
}
//Update a Task
exports.updateTask = async (req, res) => {
    const updateTaskask = await Task.findById(req.params.id);
    if (!updateTaskask) {
        return res.status(404).json({ message: "Task not found" });
    }
    updateTaskask.title = req.body.title;
    updateTaskask.description = req.body.description;
    updateTaskask.completed = req.body.completed || updateTaskask.completed;
    const updatedTask = await updateTaskask.save();
    res.status(200).json(updatedTask);
}
//Delete a Task
exports.deleteTask = async (req, res) => {
    const task = await Task.findById(req.param.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    await task.deleteOne();
    res.status(200).json({ message: "Task deleted successfully" });
}
