export default function TodoItem({ id, text, completed, onTodoChange }) {
  return (
    <li className={completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          onTodoChange(id)
        }}
      />
      <span>{text}</span>
      <button>Delete</button>
    </li>
  )
}