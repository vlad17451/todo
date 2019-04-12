import React, { Component } from 'react'
import './todo-list-item.css'

class TodoListItem extends Component {

  state = {
    done: false,
    important: false,
  }

  onLabelClick = () => {
    this.setState(({done}) => {return { done: !done }})
  }

  onMarkImportant = () => {
    this.setState((important) => {return { important: !important }})
  }

  render() {
    const { label, onDeleted } = this.props
    const { done, important } = this.state

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span className='todo-list-item-label'
        onClick={ this.onLabelClick }>{ label }</span>
        <button
          onClick={this.onMarkImportant}
          className='btn btn-outline-success'><i className="fas fa-exclamation" /></button>
        <button
        onClick={onDeleted}
          className='btn btn-outline-danger'><i className="far fa-trash-alt" /></button>
      </span>
    )
  }
}


export { TodoListItem }