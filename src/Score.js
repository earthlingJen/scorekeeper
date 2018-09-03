import React, { Component } from 'react'
import './css/score.css'

export default class Score extends Component {
  render() {
    return (
      <div className="score">
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}
