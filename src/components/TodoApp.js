import { Fragment, useContext, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import styles from '../styles/todo.module.scss';
import classNames from 'classnames';
import themeContext from "../themeContext";
import Input from './Input';
import useWindowSize from "../hooks/useWindowSize";

const _todoItems = [
  {id: 1, text: 'test 1', completed: false},
  {id: 2, text: 'test 2', completed: true},
  {id: 3, text: 'test 3', completed: false},
];

export default function TodoApp() {
  const [todoItems, setTodoItems] = useState(_todoItems);
  const [value, setValue] = useState('');
  const newTodoInput = useRef();
  const { theme, setTheme } = useContext(themeContext);
  const isSmallScreen = useWindowSize();

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

  function onDelete(id) {
    const filteredItems = todoItems.filter(item => item.id != id);
    setTodoItems(filteredItems);
  }

  useEffect(() => {
    newTodoInput.current.focus();
  }, []);

  let isSelected = false;

  return (
    <>
      <h1>My Tasks</h1>

      <div>
        <form action="" onSubmit={addNewItem}>
          <Input
            className={
              classNames(styles.todoInput,
                {
                  [styles.todoInput2]: isSelected,
                }
              )
            }
            value={value}
            onChange={e => setValue(e.target.value)}
            ref={newTodoInput}
          />

          {/* <input
            className={
              classNames(styles.todoInput,
                {
                  [styles.todoInput2]: isSelected,
                }
              )
            }
            // className={styles.todoInput + ' ' + (isSelected ? styles.todoInput2 : '')}
            ref={newTodoInput}
            type="text"
            name="item" 
            id="item"
            value={value}
            onChange={e => setValue(e.target.value)}
          /> */}
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
              onDelete={onDelete}
            />
          ))
        }
      </ul>

      {
        isSmallScreen ? "small screen" : "large screen"
      }

      <p>
        All items: {todoItems.length}
      </p>
      <p>
        completed items: {todoItems.filter(item => item.completed).length}
      </p>
      <p>
        not completed items: {todoItems.filter(item => !item.completed).length}
      </p>

      {/* selected theme: {theme}
      <button onClick={() => setTheme('dark')}>
        dark theme
      </button>
      <button onClick={() => setTheme('light')}>
        light theme
      </button> */}
    </>
  )
}