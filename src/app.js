import React, { Component} from 'react'
import {AppHeader, ItemStatusFilter, SearchPanel, TodoList, AddItem} from "./components";

export default class App extends Component {
  maxId = 100
  state = {
    todoData: [
      this.createTodoItem('Drink'),
      this.createTodoItem('make app'),
      this.createTodoItem('howdy')
    ]
  }

  createTodoItem(label) {

    return {
      label,
      important: false,
      id: this.maxId++
    }
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState( ({todoData}) => {
      const arr = [ ...todoData, newItem ]
      return {
        todoData: arr
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx =todoData.findIndex((el) => el.id === id)
      const arr = [ ...todoData]
      arr.splice(idx, 1)
      return {
        todoData: arr
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem.propName }
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount


    return (
      <div className='container w-50'>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className='d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <div className='pt-2'>
          <AddItem addItem = { this.addItem } />
        </div>
        <TodoList
          onDeleted={ this.deleteItem }
          todos={ todoData }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

      </div>
    )
  }
}