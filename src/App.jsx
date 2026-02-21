import { useState } from 'react'
import TaskIntake from './components/taskIntake'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center p-8 font-sans text-white">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-white">
          Task <span className="text-blue-500">Master</span>
        </h1>
        <p className="text-gray-400 text-lg">Manage your workflow with elegance</p>
      </header>

      <main className="w-full max-w-2xl space-y-10">
        <TaskIntake addTask={addTask} />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2">Your Tasks</h2>
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center py-10 italic border border-dashed border-white/10 rounded-2xl">
              No tasks yet. Add one above!
            </p>
          ) : (
            <div className="grid gap-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${task.completed
                    ? 'bg-white/5 border-white/10 opacity-60'
                    : 'bg-white/10 border-white/20 shadow-xl'
                    }`}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl font-bold truncate ${task.completed ? 'line-through text-gray-400' : 'text-blue-400'}`}>
                      {task.title}
                    </h3>
                    <p className={`mt-1 text-gray-400 text-sm line-clamp-2 ${task.completed ? 'line-through opacity-50' : ''}`}>
                      {task.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${task.completed
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20'
                        }`}
                    >
                      {task.completed ? 'Undo' : 'Done'}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white font-semibold text-sm transition-all border border-red-600/30"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App