type TodoListProps = {
  tasks: string[]
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
        </li>
      ))}
    </ul>
  )
}
