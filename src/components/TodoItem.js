import { useContext } from "react"
import useWindowSize from "../hooks/useWindowSize";
import ThemeContext from "../themeContext";

export default function TodoItem({ id, text, completed, onTodoChange, onDelete }) {
  const { theme } = useContext(ThemeContext);
  const isSmallScreen = useWindowSize();

  if (isSmallScreen) {
    return null;
  }

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
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  )
}