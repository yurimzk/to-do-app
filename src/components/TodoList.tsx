export type Task = {
  id: string
  name: string
}

type TodoListProps = {
  tasks: Task[]
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name}
          <input type="checkbox" name={task.name} id={task.id} />
        </li>
      ))}
    </ul>
  )
}
