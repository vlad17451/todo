import React, { Component } from 'react'

class AddItem extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({label: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({label: ''})
  }

  render() {

    const { addItem } = this.props

    return (
      <div>
        <form className="form-group d-flex"
              onSubmit={this.onSubmit}
        >
          <input type="text" className="form-control" id="inputPassword2" placeholder="New item name"
                 onChange={this.onLabelChange}
                 value={this.state.label}
          />
          <button  type="submit" className="btn btn-primary">Add</button>
        </form>

      </div>
    )
  }
}

export {AddItem}