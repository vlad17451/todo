import React, { Component } from 'react'
import './todo-list-item.css'

class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <div className={classNames + ' d-flex justify-content-between align-items-center'}>
        <span className='todo-list-item-label'
        onClick={onToggleDone}>{ label }</span>
        <div>
          <button
            onClick={onToggleImportant}
            className='btn btn-outline-success'><i className="fas fa-exclamation" /></button>
          <button
            onClick={onDeleted}
            className='btn btn-outline-danger'><i className="far fa-trash-alt" /></button>
        </div>
      </div>
    )
  }
}


export { TodoListItem }