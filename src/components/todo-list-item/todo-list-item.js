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
    this.setState(({important}) => {return { important: !important }})
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
      <div className={classNames + ' d-flex justify-content-between align-items-center'}>
        <span className='todo-list-item-label'
        onClick={ this.onLabelClick }>{ label }</span>
        <div>
          <button
            onClick={this.onMarkImportant}
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