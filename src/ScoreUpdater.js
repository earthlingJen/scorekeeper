import React, { Component } from 'react'
import './css/scoreUpdater.css'

export default class ScoreUpdater extends Component {
  render() {
    const { handleClick } = this.props
    return (
      <div className="scoreUpdater">
        <button onClick={() => handleClick(-10)} className="btn">
          -10
        </button>
        <button onClick={() => handleClick(-5)} className="btn">
          -5
        </button>
        <button onClick={() => handleClick(-1)} className="btn">
          -1
        </button>
        <button onClick={() => handleClick(+1)} className="btn">
          +1
        </button>
        <button onClick={() => handleClick(+5)} className="btn">
          +5
        </button>
        <button onClick={() => handleClick(+10)} className="btn">
          +10
        </button>
      </div>
    )
  }
}
