import React, { Component } from 'react'

class ItemStatusFilter extends Component {
  render() {
    return (
      <div className='btn-group'>
        <button type='button' className='btn btn-info'>All</button>
        <button type='button' className='btn btn-info'>Active</button>
        <button type='button' className='btn btn-info'>Done</button>
      </div>
    )
  }
}

export { ItemStatusFilter }