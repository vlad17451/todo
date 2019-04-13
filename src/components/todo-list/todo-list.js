import React from 'react'
import { TodoListItem } from '..'
import './todo-list.css'
const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps} = item
    return (
      <li key = {id} className='list-group-item'>
        <TodoListItem
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          { ...itemProps }/>
      </li>
    )
  })

  return (
    <ul className = 'list-group todo-list'>
      {elements}
    </ul>
  )
}

export { TodoList }