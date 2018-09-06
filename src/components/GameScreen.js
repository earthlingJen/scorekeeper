import React, { Component } from 'react'
import Button from './Button'
import EditCard from './EditCard'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onSaveRound, onResetScores } = this.props
    return (
      <React.Fragment>
        <h1>Count Score</h1>
        {players.map((player, index) => (
          <EditCard
            key={index}
            title={player.name}
            score={player.roundScore}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Button onClick={onSaveRound}>Save Round</Button>
        <Button onClick={onResetScores}>Reset Scores</Button>
      </React.Fragment>
    )
  }
}
