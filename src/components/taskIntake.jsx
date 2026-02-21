import React, { useState } from 'react';

const TaskIntake = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) return;
        addTask(taskName, taskDescription);
        setTaskName('');
        setTaskDescription('');
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Create New Task
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="taskName" className="block text-sm font-medium mb-2 text-gray-300">
                        Task Name
                    </label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter task name..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 text-white"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="taskDescription" className="block text-sm font-medium mb-2 text-gray-300">
                        Description
                    </label>
                    <textarea
                        id="taskDescription"
                        rows="3"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        placeholder="What needs to be done?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none text-white"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-lg"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TaskIntake;