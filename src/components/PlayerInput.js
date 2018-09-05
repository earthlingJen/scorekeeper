import React, { Component } from 'react'

export default class PlayerInput extends Component {
  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  checkForEnterButton = event => {
    if (event.key === 'Enter' && this.state.inputValue !== '') {
      this.props.onSubmit(this.state.inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
          autoFocus
          placeholder="Name"
          value={this.state.inputValue}
          type="text"
          style={{ border: '1px solid orange' }}
        />
      </div>
    )
  }
}
