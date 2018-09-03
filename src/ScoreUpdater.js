import React, { Component } from 'react'
import './css/scoreUpdater.css'

export default class ScoreUpdater extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div className="scoreUpdater">
        <button onClick={() => onClick(-10)} className="btn">
          -10
        </button>
        <button onClick={() => onClick(-5)} className="btn">
          -5
        </button>
        <button onClick={() => onClick(-1)} className="btn">
          -1
        </button>
        <button onClick={() => onClick(+1)} className="btn">
          +1
        </button>
        <button onClick={() => onClick(+5)} className="btn">
          +5
        </button>
        <button onClick={() => onClick(+10)} className="btn">
          +10
        </button>
      </div>
    )
  }
}
