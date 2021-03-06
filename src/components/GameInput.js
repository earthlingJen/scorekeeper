import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GameInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

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
          placeholder={'Game Name'}
          value={this.state.inputValue}
          type="text"
          style={{ border: '1px solid orange' }}
        />
      </div>
    )
  }
}
