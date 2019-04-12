import React from 'react'
import {AppHeader, ItemStatusFilter, SearchPanel, TodoList} from "./components";

const App = () => {
  const todoData = [
    { label: 'drink', important: false, id: 1 },
    { label: 'make prog', important: false, id: 2 },
    { label: 'chill', important: false, id: 3 },
    { label: 'hi', important: false, id: 4 },
  ]
  return (
    <div>
      <AppHeader />
      <SearchPanel /><ItemStatusFilter />
      <TodoList
        onDeleted={ (id) => console.log('del', id)}
        todos={todoData}/>
    </div>
  )
}

export default App