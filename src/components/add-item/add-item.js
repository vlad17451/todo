import React, { Component } from 'react'

class AddItem extends Component {
  render() {

    const { addItem } = this.props

    return (
      <div>
        <div className="form-group d-flex">
          <input type="text" className="form-control" id="inputPassword2" placeholder="New item name" />
          <button onClick={addItem} type="submit" className="btn btn-primary">Add</button>
        </div>

      </div>
    )
  }
}

export {AddItem}