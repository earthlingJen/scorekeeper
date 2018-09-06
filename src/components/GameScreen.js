import React, { Component } from 'react'
import Button from './Button'
import EditCard from './EditCard'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onBack, onResetScores } = this.props
    return (
      <React.Fragment>
        <h2>Score keeper</h2>
        {players.map((player, index) => (
          <EditCard
            key={index}
            title={player.name}
            score={player.score}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Button onClick={onResetScores}>Reset Scores</Button>
        <Button onClick={onBack}>Back</Button>
      </React.Fragment>
    )
  }
}
