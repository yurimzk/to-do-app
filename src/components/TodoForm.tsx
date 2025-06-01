export function TodoForm() {
  return(
    <div>
      <input type="text" id="form" name="form" placeholder="New task" className="border-2 rounded-lg" />
      <button type="submit" className="border-2 rounded-lg">
        +
      </button>
    </div>
  )
}
