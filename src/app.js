import React, { Component} from 'react'
import {AppHeader, ItemStatusFilter, SearchPanel, TodoList, AddItem} from "./components";

export default class App extends Component {
  state = {
    todoData: [
      { label: 'drink', important: false, id: 1 },
      { label: 'make prog', important: false, id: 2 },
      { label: 'chill', important: false, id: 3 },
      { label: 'hi', important: false, id: 4 },
    ]
  }
  addItem = () => {
    this.setState( ({todoData}) => {
      const arr = [ ...todoData ]
      arr.push({ label: 'howdy pardner', important: false, id: (todoData[todoData.length-1].id + 1) })
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
  render() {
    return (
      <div className='container w-50'>
        <AppHeader />
        <div className='d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          onDeleted={ this.deleteItem }
          todos={ this.state.todoData }/>
        <AddItem addItem = { this.addItem } />
      </div>
    )
  }
}