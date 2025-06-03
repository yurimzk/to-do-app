export type Task = {
  id: string
  name: string
}

type TodoListProps = {
  tasks: Task[]
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <ul className="flex flex-col gap-1 ">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between text-gray-800" >
          {task.name}
          <input type="checkbox" name={task.name} id={task.id} className="w-4 h-4" />
        </li>
      ))}
    </ul>
  )
}
