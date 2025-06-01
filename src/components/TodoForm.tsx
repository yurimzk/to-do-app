import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input type="text"
      name="form"
      placeholder="New task"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="form- border-2 rounded-lg" />
      <button type="submit" className="border-2 rounded-lg">
        +
      </button>
    </form>
  )
}
