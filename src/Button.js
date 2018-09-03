import React, { Component } from 'react'
import './css/button.css'

export default class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.handleClick}>
        <h1>{this.props.children}</h1>
      </button>
    )
  }
}
