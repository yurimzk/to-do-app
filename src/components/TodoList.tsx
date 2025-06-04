export type Task = {
  id: string
  name: string
}

type TodoListProps = {
  tasks: Task[]
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <ul className="mt-8 flex flex-col items-center gap-2">
      {tasks.map((task) => (
        <li key={task.id} className="grid grid-cols-[1fr_auto] items-center w-full max-w-md px-4">
        <span className="text-gray-800">{task.name}</span>
        <input
          type="checkbox"
          id={task.id}
          name={task.name}
          className="w-4 h-4"
        />
      </li>
      ))}
    </ul>
  )
}
