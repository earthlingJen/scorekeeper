import React, { Component } from 'react'
import './css/App.css'
import Score from './Score'
import ScoreUpdater from './ScoreUpdater'
import Button from './Button'

class App extends Component {
  state = {
    score: 30,
  }

  updateScore = value => {
    this.setState({ score: this.state.score + value })
  }

  resetScore = () => {
    this.setState({ score: 0 })
  }

  render() {
    return (
      <div className="App">
        <h2>Score keeper</h2>
        <Score value={this.state.score} />
        <ScoreUpdater onClick={this.updateScore} />
        <Button handleClick={this.resetScore}>Reset</Button>
      </div>
    )
  }
}

export default App
