import React, { Component } from 'react'
import './css/App.css'
import Score from './Score'
import ScoreUpdater from './ScoreUpdater'
import Button from './Button'
import ScoreBoard from './ScoreBoard'

class App extends Component {
  state = {
    users: [
      { name: 'Jen', score: 0 },
      { name: 'Bob', score: 0 },
      { name: 'Bill', score: 0 },
    ],
  }

  updateScore = (index, value) => {
    const users = this.state.users
    const user = users[index]

    this.setState({
      users: [
        ...users.slice(0, index),
        { ...user, score: user.score + value },
        ...users.slice(index + 1),
      ],
    })
  }

  resetScore = () => {
    this.setState({
      users: this.state.users.map(user => ({ ...user, score: 0 })),
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Score keeper</h2>
        {this.state.users.map((user, index) => (
          <ScoreBoard
            title={user.name}
            score={user.score}
            onUpdate={score => this.updateScore(index, score)}
          />
        ))}

        <Button handleClick={this.resetScore}>Reset</Button>
      </div>
    )
  }
}

export default App
