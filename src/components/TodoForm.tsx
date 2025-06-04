import React, { useState } from 'react'
import { Plus } from 'phosphor-react'

interface TodoFormProps {
  onAddTask: (text: string) => void
}

export function TodoForm({ onAddTask }: TodoFormProps) {
  const [input, setInput] = useState ("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(input)
    setInput("")
  }

  return(
    <form onSubmit={handleSubmit} className="flex justify-center align-middle gap-2 mt-8">
      <input type="text"
      name="form"
      placeholder="New task"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border-2 rounded-lg px-1 py-0.5 w-full max-w-md placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800 hover:ring-1 hover:ring-gray-800" />
      <button type="submit" className="w-6 h-6 border-2 rounded-full border-gray-300 flex justify-center self-center opacity-60 hover:opacity-100">
        <Plus className="w-4 h-4 self-center" />
      </button>
    </form>
  )
}
