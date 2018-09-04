import React, { Component } from 'react'
import ScoreUpdater from './ScoreUpdater'

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div>
        <span class="userName">{title}</span>
        <span class="score">{score}</span>
        <ScoreUpdater handleClick={onUpdate} />
      </div>
    )
  }
}
