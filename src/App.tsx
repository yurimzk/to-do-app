import './App.scss'
import { useState } from 'react'
import { Header } from  './components/Header.tsx'
import { TodoForm } from  './components/TodoForm.tsx'
import { TodoList } from './components/TodoList.tsx'
import type { Task } from './components/TodoList.tsx'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (newTask: string) => {
    if (!newTask.trim()) return

    const task: Task = {
      id: crypto.randomUUID(),
      name: newTask
    }

    setTasks(prev => [...prev, task])
  }

  return(
    <main>
      <Header />
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} />
    </main>
  )
}

export default App
