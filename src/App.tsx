import './App.scss'
import { useState } from 'react'
import { Header } from  './components/Header.tsx'
import { TodoForm } from  './components/TodoForm.tsx'
import { TodoList } from './components/TodoList.tsx'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const handleAddTask = (newTask: string) => {
    if (!newTask.trim()) return
    setTasks(prev => [...prev, newTask])
    // console.log("Tarefa adicionada:", newTask)
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
