import { Fragment, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const _todoItems = [
  {id: 1, text: 'test 1', completed: false},
  {id: 2, text: 'test 2', completed: true},
  {id: 3, text: 'test 3', completed: false},
];

export default function TodoApp() {
  const [todoItems, setTodoItems] = useState(_todoItems);
  const [value, setValue] = useState('');
  const newTodoInput = useRef();

  function addNewItem(e) {
    e.preventDefault();
    
    let newTodoItem = {
      id: Date.now(), text: value, completed: false
    };

    setTodoItems([
      ...todoItems,
      newTodoItem,
    ]);

    setValue('');
  }

  function onTodoChange(id) {
    let newItems = todoItems.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    })
    setTodoItems(newItems);
  }

  useEffect(() => {
    newTodoInput.current.focus();
  }, []);

  return (
    <>
      <h1>My Tasks</h1>

      <div>
        <form action="" onSubmit={addNewItem}>
          <input
            ref={newTodoInput}
            type="text"
            name="item" 
            id="item"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit">Add item</button>
        </form>
      </div>

      <ul>
        {
          todoItems.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              onTodoChange={onTodoChange}
            />
          ))
        }
      </ul>
    </>
  )
}